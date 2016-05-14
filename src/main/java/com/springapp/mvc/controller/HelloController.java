package com.springapp.mvc.controller;

import com.springapp.mvc.sensorControl.SensorContact;
import com.springapp.mvc.sensorControl.SensorLocation;
import com.springapp.mvc.sensorControl.SensorType;
import com.springapp.mvc.sensorEntity.Location;
import com.springapp.mvc.sensorEntity.PsensorInfo;
import com.springapp.mvc.sensorEntity.SDataEntity;
import com.springapp.mvc.sensorEntity.VsensorInfo;
import com.springapp.mvc.sensorService.RtvSensorD;
import com.springapp.mvc.sensorService.SensorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;


@Controller
@EnableAsync
public class HelloController {

    @Autowired
    SensorServices sensorservices;

    @Autowired
    RtvSensorD rtvSensorD;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String mainPage(ModelMap model) {
        //model.addAttribute("message", "Hello world!");
        return "main";
    }

    @RequestMapping(value = "/sensorMgn", method = RequestMethod.GET)
    public String sensorMan(ModelMap model) {
        //model.addAttribute("message", "Hello world!");
        return "sensorMgn";
    }

    @RequestMapping(value = "/monitor", method = RequestMethod.GET)
    public String sensorMonitor(ModelMap model) {
        //model.addAttribute("message", "Hello world!");
        return "monitor";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(ModelMap model) {
        return "login";
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String search(ModelMap model) {
        return "search";
    }

    @RequestMapping(value = "/sensorMaintenance", method = RequestMethod.GET)
    public String sensorMaintenance(ModelMap model) {
        return "sensorMaintenance";
    }

    @RequestMapping(value = "/rtvsensord/{type}/{location}/{strdate}/{enddate}", method = RequestMethod.GET)
    @ResponseBody
    public String rtvSensorD(@PathVariable("type") String type, @PathVariable("location") String location,
                             @PathVariable("strdate") String strdate, @PathVariable("enddate") String enddate) {
        Future<String> res = rtvSensorD.rtvData(type, location, strdate, enddate);
        try {
            while (!res.isDone()) {
                Thread.sleep(500);
            }
            return res.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
            return null;
        } catch (ExecutionException e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/appRqstHandler/{type}/{location}/{strdate}/{enddate}", method = RequestMethod.GET)
    @ResponseBody
    public SDataEntity appRqstHandler(@PathVariable("type") String type, @PathVariable("location") String location,
                                      @PathVariable("strdate") String strdate, @PathVariable("enddate") String enddate) {
        return null;

    }

    @RequestMapping(value = "/rtvSensorLst/{type}", method = RequestMethod.GET)
    @ResponseBody
    public VsensorInfo rtvSensorLst(@PathVariable("type") String type) {
        return sensorservices.findVsensorByType(type);
    }

    @RequestMapping(value = "/gensensor", method = RequestMethod.GET)
    @ResponseBody
    public void gensensor() {

        sensorservices.clearSensorInfo();
        String PsensorId = "";
        String made = "LG";
        String model = "solar_battery";
        String seriesnumber = "sob_0002";
        String sensorType = "";
        Location location = null;
        String Status = "Enabled";
        int id = 1;

        //sensor type
        for (Map.Entry<String, List<String>> entry : SensorContact.sensortypemap.entrySet()) {
            //System.out.println(entry.getKey().toString());
            String VsensorId = "vs_" + String.valueOf(id++);
            sensorType = entry.getKey().toString();
            //sensor location
            List<PsensorInfo> PsensorList = new ArrayList<PsensorInfo>();

            for (int i = 0; i < entry.getValue().size(); i++) {
                PsensorId = VsensorId + "_ps_" + String.valueOf(i);
                location = new Location(entry.getValue().get(i),
                        SensorContact.sensormap.get(entry.getValue().get(i)).getLatitude(),
                        SensorContact.sensormap.get(entry.getValue().get(i)).getLongitude());
                PsensorInfo pitem = new PsensorInfo(PsensorId, made, model, seriesnumber, sensorType, location, Status);
                PsensorList.add(pitem);

            }
            VsensorInfo vitem = new VsensorInfo(VsensorId, sensorType, Status, PsensorList);
            sensorservices.createVsensor(vitem);
            //System.out.println(entry.getValue().get(i));
        }


    }


}