package com.springapp.mvc.sensorService;

import com.springapp.mvc.sensorControl.SensorContact;
import org.springframework.web.client.RestTemplate;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by ivanybma on 5/13/16.
 */
public class RtvSensorD {

    static public String rtvData(String type,String location, String strdate, String enddate) {

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
