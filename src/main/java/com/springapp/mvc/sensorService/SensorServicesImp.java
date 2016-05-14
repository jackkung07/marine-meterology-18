package com.springapp.mvc.service.sensor;

import com.springapp.mvc.entity.sensor.VsensorInfo;
import com.springapp.mvc.repository.sensor.SensorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ivanybma on 5/13/16.
 */
@Service
public class SensorServicesImp implements SensorServices{

    @Autowired
    SensorRepo sensorRepo;


    @Override
    public List<VsensorInfo> listAllVsensorInfo() {

        List<VsensorInfo> rst = new ArrayList<VsensorInfo>();
        Iterable<VsensorInfo> VsensorInfos = sensorRepo.findAll();
        for (VsensorInfo e : VsensorInfos) {
            rst.add(e);
        }
        return rst;
    }

    @Override
    public void chgVsensorStatus(String vsensorId, String newstatus) {
        sensorRepo.chgVsensorStatus(vsensorId,newstatus);
    }

    @Override
    public void chgPsensorStatus(String vsensorId, String psensorId, String newstatus) {
        sensorRepo.chgPsensorStatus(vsensorId,psensorId,newstatus);
    }

    @Override
    public void createVsensor(VsensorInfo vsensorInfo) {
        sensorRepo.save(vsensorInfo);
    }
}
