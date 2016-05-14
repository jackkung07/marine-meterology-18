package com.springapp.mvc.sensorControl;

import org.springframework.scheduling.annotation.Scheduled;

import java.util.List;

/**
 * Created by cheyikung on 5/13/16.
 */
public class SensorMonitor {
    private static List<Sensor> sensorList;

    @Scheduled(fixedRate = 1000)
    public void seaWaterPressure(){
        for(Sensor sensor: sensorList) {

//            String res = RtvSensorD.rtvData("", "", "", "");
                    System.out.println("sensor type: " + sensor.getSensorType());
                    System.out.println("sensor status: " + sensor.getSensorStatus());
//            System.out.println("sea water pressure: " + res);

        }
    }

    public void setSensorStatusList(List<Sensor> sensorStatusList) {
        this.sensorList = sensorStatusList;
    }
}
