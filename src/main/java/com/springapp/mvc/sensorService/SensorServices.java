package com.springapp.mvc.service.sensor;

import com.springapp.mvc.entity.sensor.VsensorInfo;

import java.util.List;

/**
 * Created by ivanybma on 5/13/16.
 */
public interface SensorServices {
    public List<VsensorInfo> listAllVsensorInfo();
    public void createVsensor(VsensorInfo vsensorInfo);
    public void chgVsensorStatus(String vsensorId, String newstatus);
    public void chgPsensorStatus(String vsensorId, String psensorId, String newstatus);
}
