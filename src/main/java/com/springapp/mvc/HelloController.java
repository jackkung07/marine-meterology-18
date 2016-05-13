package com.springapp.mvc;

import SensorControl.SensorContact;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class HelloController {
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

		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		Date dateobj = new Date();
		String curdate = df.format(dateobj);
		System.out.println(curdate);

		if(strdate.equals("_"))	strdate=curdate;
		if(enddate.equals("_"))	enddate=curdate;

		String url = SensorContact.buildurl(type, location, strdate, enddate);
		RestTemplate restTemplate;
		restTemplate = new RestTemplate();
		System.out.println(url);
		String output = restTemplate.getForObject(url, String.class);

		return output;

	}


}