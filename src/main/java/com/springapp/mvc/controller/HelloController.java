package com.springapp.mvc.controller;

import com.springapp.mvc.sensorControl.SensorContact;
import com.springapp.mvc.sensorControl.SensorLocation;
import com.springapp.mvc.sensorControl.SensorType;
import com.springapp.mvc.sensorEntity.Location;
import com.springapp.mvc.sensorEntity.PsensorInfo;
import com.springapp.mvc.sensorEntity.VsensorInfo;
import com.springapp.mvc.sensorService.RtvSensorD;
import com.springapp.mvc.sensorService.SensorServices;
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
		return RtvSensorD.rtvData(type, location, strdate, enddate);
	}

	@RequestMapping(value = "/gensensor", method = RequestMethod.GET)
	@ResponseBody
	public void gensensor() {
		String PsensorId="0001";
		String made = "LG";
		String model = "solar_battery";
		String seriesnumber = "sob_0002";
		String sensorType = SensorType.sea_water_ph_reported_on_total_scale.name();
		Location location = new Location(SensorLocation.cencoos_carquinez.name(),
				SensorContact.sensormap.get(SensorLocation.cencoos_carquinez.name()).getLatitude(),
				SensorContact.sensormap.get(SensorLocation.cencoos_carquinez.name()).getLongitude());
		String Status = "Enabled";
		PsensorInfo pitem = new PsensorInfo(PsensorId, made, model, seriesnumber, sensorType, location, Status);


		String VsensorId="vs_0002";
		List<PsensorInfo> PsensorList = new ArrayList<PsensorInfo>();
		PsensorList.add(pitem);
		VsensorInfo vitem = new VsensorInfo(VsensorId, sensorType, Status, PsensorList);
		sensorservices.createVsensor(vitem);

		}


}