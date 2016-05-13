package com.springapp.mvc.sensor.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ivanybma on 5/13/16.
 */
@Document(collection = "sensorinfo")
public class VsensorInfo {


    @Id
    private String Id;

    //unique
    private String VsensorId;

    private String SensorType;

    private String Status;

    private List<PsensorInfo> PsensorList = new ArrayList<PsensorInfo>();



    public VsensorInfo() {

    }

    @PersistenceConstructor
    public VsensorInfo(String VsensorId, String SensorType, String Status, List<PsensorInfo> PsensorList) {
        super();
        this.VsensorId = VsensorId;
        this.SensorType = SensorType;
        this.Status = Status;
        this.PsensorList = PsensorList;
    }



}
