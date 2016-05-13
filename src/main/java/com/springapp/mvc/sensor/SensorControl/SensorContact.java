package com.springapp.mvc.sensor.SensorControl;


import com.springapp.mvc.entity.sensor.Location;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by ivanybma on 5/13/16.
 */
public class SensorContact {


    static public final Map<String, Location> sensormap = new HashMap<String, Location>();
    static public final String sensorbase = "http://erddap.cencoos.org/erddap/tabledap/";
    static public final String filetype=".json?";
    static public final String fixvalue = "time,latitude,longitude,";
    static public final String starttime = "T00:00:00Z", endtime = "T23:59:59Z";
    static public final String lfttime = "&time>=", rhttime = "&time<=";


    static public enum sensorlocation{
        edu_ucdavis_bml_bodega, cencoos_carquinez, edu_ucdavis_bml_fortpoint,
        edu_humboldt_hbc, cencoos_humboldt, cencoos_monterey, edu_calpoly_marine_morro,
        cencoos_trinidad, cencoos_tiburon
    }

    static public enum sensortype{
        sea_water_pressure, sea_water_temperature, sea_water_practical_salinity,
        mass_concentration_of_oxygen_in_sea_water, sea_water_ph_reported_on_total_scale, turbidity
    }



    static {
        sensormap.put("edu_ucdavis_bml_bodega",new Location("edu_ucdavis_bml_bodega","38.31652","-123.0709"));
        sensormap.put("cencoos_carquinez",new Location("cencoos_carquinez","38.0657","-122.2302"));
        sensormap.put("edu_ucdavis_bml_fortpoint",new Location("edu_ucdavis_bml_fortpoint","37.80663","-122.4662"));
        sensormap.put("edu_humboldt_hbc",new Location("edu_humboldt_hbc","40.8013","-124.1816"));
        sensormap.put("cencoos_humboldt",new Location("cencoos_humboldt","40.7775","-124.19652"));
        sensormap.put("cencoos_monterey",new Location("cencoos_monterey","36.60513","-121.88935"));
        sensormap.put("edu_calpoly_marine_morro",new Location("edu_calpoly_marine_morro","35.365","-120.8575"));
        sensormap.put("cencoos_trinidad",new Location("cencoos_trinidad","41.055","124.14703"));
        sensormap.put("cencoos_tiburon",new Location("cencoos_tiburon","37.8915","-122.4467"));
    }

    static public String buildurl(String Stype, String Slocation, String Strdate, String Enddate){
        String url1 = sensorbase + Slocation + filetype + fixvalue + Stype;
        String url2 = lfttime + Strdate + starttime + rhttime + Enddate + endtime;

        System.out.println(url1+url2);
        return url1+url2;
    }

}
