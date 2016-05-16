package com.springapp.mvc.controller;

import com.springapp.mvc.sensorControl.*;
import com.springapp.mvc.sensorEntity.*;
import com.springapp.mvc.sensorRepo.UserRepo;
import com.springapp.mvc.sensorService.DataServices;
import com.springapp.mvc.sensorService.RtvSensorD;
import com.springapp.mvc.sensorService.SensorServices;
import com.springapp.mvc.sensorService.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;


@Controller
@EnableAsync
public class HelloController {

    @Autowired
    SensorServices sensorservices;

    @Autowired
    RtvSensorD rtvSensorD;

    @Autowired
    SensorMonitor sensorMonitor;

    @Autowired
    DataServices dataServices;

    @Autowired
    UserServices userServices;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String mainPage(ModelMap model) {
        createAdminAccount();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName(); //get logged in username
        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
        System.out.println("username: " + username);
        System.out.println("authority: " + authorities);
        return "main";
    }

    @RequestMapping(value = "/sensorMgn", method = RequestMethod.GET)
    public String sensorMan(ModelMap model) {
        //model.addAttribute("message", "Hello world!");
        return "sensorMgn";
    }

    @RequestMapping(value = "/monitor", method = RequestMethod.GET)
    public String monitorhome(ModelMap model) {
        //model.addAttribute("message", "Hello world!");
        return "monitor";
    }

    @RequestMapping(value = "/monitor/{type}", method = RequestMethod.GET)
    @ResponseBody
    public VsensorInfo monitor(@PathVariable("type") String type) {
        List<Sensor> sensorList = sensorMonitor.getSensors(SensorType.valueOf(type));
        VsensorInfo vsensorInfo = sensorservices.findVsensorByType(type);
        vsensorInfo.setStatus("");
        for(int i = 0; i < vsensorInfo.getPsensorList().size(); i++){
            PsensorInfo psensorInfo = vsensorInfo.getPsensorList().get(i);
            for(Sensor sensor: sensorList) {
                if(sensor.getSensorLocation().equals(SensorLocation.valueOf(psensorInfo.getLocation().getLocation()))) {
                    psensorInfo.setStatus(sensor.getSensorStatus().toString());
                    break;
                }
            }
            vsensorInfo.getPsensorList().set(i, psensorInfo);
        }
        return vsensorInfo;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
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
    public List<SDataEntity> appRqstHandler(@PathVariable("type") String type, @PathVariable("location") String location,
                                      @PathVariable("strdate") String strdate, @PathVariable("enddate") String enddate) {
        return dataServices.findDataList(SensorType.valueOf(type), SensorLocation.valueOf(location), strdate, enddate);
    }

    @RequestMapping(value = "/rtvSensorLst/{type}", method = RequestMethod.GET)
    @ResponseBody
    public VsensorInfo rtvSensorLst(@PathVariable("type") String type) {
        return sensorservices.findVsensorByType(type);
    }


    @RequestMapping(value = "/chgSensorStatus/{VsensorId}/{PsensorId}/{status}", method = RequestMethod.POST)
    @ResponseBody
    public void chgSensorStatus(@PathVariable("VsensorId") String VsensorId,
                                    @PathVariable("PsensorId") String PsensorId, @PathVariable("status") String status) {

        if(PsensorId.equals("_"))
        {
            sensorservices.chgVsensorStatus(VsensorId,status);
        }
        else
        {
            sensorservices.chgPsensorStatus(VsensorId,PsensorId,status);
        }

        return;
    }

    @RequestMapping(value = "/gensensor", method = RequestMethod.GET)
    @ResponseBody
    public void gensensor() {

        sensorservices.clearSensorInfo();
        String psensorId = "";
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
                psensorId = VsensorId + "_ps_" + String.valueOf(i);
                location = new Location(entry.getValue().get(i),
                        SensorContact.sensormap.get(entry.getValue().get(i)).getLatitude(),
                        SensorContact.sensormap.get(entry.getValue().get(i)).getLongitude());
                PsensorInfo pitem = new PsensorInfo(psensorId, made, model, seriesnumber, sensorType, location, Status);
                PsensorList.add(pitem);

            }
            VsensorInfo vitem = new VsensorInfo(VsensorId, sensorType, Status, PsensorList);
            sensorservices.createVsensor(vitem);
            //System.out.println(entry.getValue().get(i));
        }
    }

    //---------user log in ----------
    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup(ModelMap model) {
        return "signup";
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public String adduser(@ModelAttribute("user") User user, ModelMap model) {
        user.setRole("ROLE_USER");
        userServices.saveUserAccount(user);
        return "login";
    }

    private void createAdminAccount(){
        User user = userServices.findUserAccountByName("admin");
        if(user == null) {
            user = new User();
            user.setName("admin");
            user.setPassword("admin");
            user.setRole("ROLE_ADMIN");
            userServices.saveUserAccount(user);
        }
    }
}