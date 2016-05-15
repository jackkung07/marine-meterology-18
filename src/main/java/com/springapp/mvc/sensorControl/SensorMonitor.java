package com.springapp.mvc.sensorControl;

import com.springapp.mvc.sensorService.DataServices;
import com.springapp.mvc.sensorService.RtvSensorD;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import static com.springapp.mvc.sensorControl.SensorType.sea_water_pressure;

/**
 * Created by cheyikung on 5/13/16.
 */
@EnableAsync
public class SensorMonitor {

    @Autowired
    RtvSensorD rtvSensorD;

    @Autowired
    DataServices dataServices;

    private List<Sensor> seaWaterPressureList = new ArrayList<Sensor>();
    private List<Sensor> seaWaterTemperatureList = new ArrayList<Sensor>();
    private List<Sensor> seaWaterPracticalSalinityList = new ArrayList<Sensor>();
    private List<Sensor> massConcOxygenList = new ArrayList<Sensor>();
    private List<Sensor> seaWaterPhList = new ArrayList<Sensor>();
    private List<Sensor> turbidityList = new ArrayList<Sensor>();

    public SensorMonitor() {
        for (Map.Entry<String, List<String>> entry : SensorContact.sensortypemap.entrySet()) {
            if (entry.getKey().equals(SensorType.sea_water_pressure.toString())) {
                for (int i = 0; i < entry.getValue().size(); i++) {
                    seaWaterPressureList.add(new Sensor(SensorType.valueOf(entry.getKey()), SensorLocation.valueOf(entry.getValue().get(i))));
                }
            } else if (entry.getKey().equals(SensorType.sea_water_temperature.toString())) {
                for (int i = 0; i < entry.getValue().size(); i++) {
                    seaWaterTemperatureList.add(new Sensor(SensorType.valueOf(entry.getKey()), SensorLocation.valueOf(entry.getValue().get(i))));
                }
            } else if (entry.getKey().equals(SensorType.sea_water_practical_salinity.toString())) {
                for (int i = 0; i < entry.getValue().size(); i++) {
                    seaWaterPracticalSalinityList.add(new Sensor(SensorType.valueOf(entry.getKey()), SensorLocation.valueOf(entry.getValue().get(i))));
                }
            } else if (entry.getKey().equals(SensorType.mass_concentration_of_oxygen_in_sea_water.toString())) {
                for (int i = 0; i < entry.getValue().size(); i++) {
                    massConcOxygenList.add(new Sensor(SensorType.valueOf(entry.getKey()), SensorLocation.valueOf(entry.getValue().get(i))));
                }
            } else if (entry.getKey().equals(SensorType.sea_water_ph_reported_on_total_scale.toString())) {
                for (int i = 0; i < entry.getValue().size(); i++) {
                    seaWaterPhList.add(new Sensor(SensorType.valueOf(entry.getKey()), SensorLocation.valueOf(entry.getValue().get(i))));
                }
            } else {
                for (int i = 0; i < entry.getValue().size(); i++) {
                    turbidityList.add(new Sensor(SensorType.valueOf(entry.getKey()), SensorLocation.valueOf(entry.getValue().get(i))));
                }
            }
        }
//        System.out.println("sea water pressure total sensors: " + seaWaterPressureList.size());
//        System.out.println("sea water temperature total sensors: " + seaWaterTemperatureList.size());
//        System.out.println("sea water practical salinity total sensors: " + seaWaterPracticalSalinityList.size());
//        System.out.println("mass oxygen total sensors: " + massConcOxygenList.size());
//        System.out.println("sea water ph total sensors: " + seaWaterPhList.size());
//        System.out.println("turbidity total sensors: " + turbidityList.size());
    }

    public List<Sensor> getAllSensors() {
        List<Sensor> sensorList = new ArrayList<Sensor>();
        sensorList.addAll(seaWaterPressureList);
        sensorList.addAll(seaWaterTemperatureList);
        sensorList.addAll(seaWaterPracticalSalinityList);
        sensorList.addAll(massConcOxygenList);
        sensorList.addAll(seaWaterPhList);
        sensorList.addAll(turbidityList);
        return sensorList;
    }

    @Scheduled(fixedRate = 5000)
    public void monitorAllSensors() {
        monitorSensor(seaWaterPressureList);

        monitorSensor(seaWaterTemperatureList);

        monitorSensor(seaWaterPracticalSalinityList);

        monitorSensor(massConcOxygenList);

        monitorSensor(seaWaterPhList);

        monitorSensor(turbidityList);
    }

    private void monitorSensor(List<Sensor> sensorList) {

        for(int i = 0; i < sensorList.size(); i++){
            Future<String> res = rtvSensorD.rtvData(sensorList.get(i).getSensorType().toString(), sensorList.get(i).getSensorLocation().toString(), "_", "_");
            try {
                while(!(res.isDone())){
                    Thread.sleep(500);
                }
                if (!(res.get().equals("null")) && checkStatus(res.get())) {
                    dataServices.saveData(sensorList.get(i).getSensorType(), sensorList.get(i).getSensorLocation(), res.get());
                    sensorList.get(i).setSensorStatus(SensorStatus.UP);
                } else {
                    sensorList.get(i).setSensorStatus(SensorStatus.DOWN);
                }
            } catch (InterruptedException e) {
//                e.printStackTrace();
                sensorList.get(i).setSensorStatus(SensorStatus.DOWN);
            } catch (ExecutionException e) {
//                e.printStackTrace();
                sensorList.get(i).setSensorStatus(SensorStatus.DOWN);
            }
            System.out.println(sensorList.get(i).toString());
        }
    }

    private boolean checkStatus(String json) {
        JSONObject result = new JSONObject(json);
        JSONObject table = result.getJSONObject("table");
        JSONArray rows = table.getJSONArray("rows");
        String temp = rows.get(0).toString().trim();
        int idx1 = temp.indexOf("[");
        int idx2 = temp.lastIndexOf("]");
        temp = temp.substring(idx1 + 1, idx2);
        String[] data = temp.split(",");
        if (data[data.length - 1].equals("null")) {
            return false;
        }
        return true;
    }
}
