package com.springapp.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HelloController {
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String mainPage(ModelMap model) {
		//model.addAttribute("message", "Hello world!");
		return "main";
	}

	@RequestMapping(value = "/sensormgn", method = RequestMethod.GET)
	public String sensorMan(ModelMap model) {
		//model.addAttribute("message", "Hello world!");
		return "sensorMgn";
	}

	@RequestMapping(value = "/monitor", method = RequestMethod.GET)
	public String sensorMonitor(ModelMap model) {
		//model.addAttribute("message", "Hello world!");
		return "monitor";
	}
}