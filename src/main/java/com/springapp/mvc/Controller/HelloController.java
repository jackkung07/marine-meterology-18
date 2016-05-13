package com.springapp.mvc.Controller;


import com.springapp.mvc.entity.sensor.Location;
import com.springapp.mvc.entity.sensor.PsensorInfo;
import com.springapp.mvc.entity.sensor.VsensorInfo;
import com.springapp.mvc.sensor.SensorControl.SensorContact;
import com.springapp.mvc.service.sensor.RtvSensorD;
import com.springapp.mvc.service.sensor.SensorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@Controller
public class HelloController {

	@Autowired
	SensorServices sensorservices;

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
		return RtvSensorD.rtvData(type,location,strdate, enddate);
	}

	@RequestMapping(value = "/gensensor", method = RequestMethod.GET)
	@ResponseBody
	public void gensensor() {
		String PsensorId="0001";
		String made = "samsung";
		String model = "solar_battery";
		String seriesnumber = "sob_0001";
		String SensorType = SensorContact.sensortype.mass_concentration_of_oxygen_in_sea_water.name();
		Location location = new Location(SensorContact.sensorlocation.cencoos_carquinez.name(),
				SensorContact.sensormap.get(SensorContact.sensorlocation.cencoos_carquinez.name()).getLatitude(),
				SensorContact.sensormap.get(SensorContact.sensorlocation.cencoos_carquinez.name()).getLongitude());
		String Status = "Enabled";
		PsensorInfo pitem = new PsensorInfo(PsensorId, made, model, seriesnumber, SensorType, location, Status);


		String VsensorId="vs_0001";
		List<PsensorInfo> PsensorList = new ArrayList<PsensorInfo>();
		PsensorList.add(pitem);
		VsensorInfo vitem = new VsensorInfo(VsensorId, SensorType, Status, PsensorList);
		sensorservices.createVsensor(vitem);

	}


}