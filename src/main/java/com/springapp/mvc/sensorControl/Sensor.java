package com.springapp.mvc.sensorControl;

/**
 * Created by cheyikung on 5/13/16.
 */
public class Sensor {

    private SensorStatus sensorStatus;

    private SensorType sensorType;

    public Sensor() {
    }

    public Sensor(SensorType sensorType) {
        this.sensorType = sensorType;
        this.sensorStatus = SensorStatus.UNKNOWN;
    }

    public SensorStatus getSensorStatus() {
        return sensorStatus;
    }

    public void setSensorStatus(SensorStatus sensorStatus) {
        this.sensorStatus = sensorStatus;
    }

    public SensorType getSensorType() {
        return sensorType;
    }

    public void setSensorType(SensorType sensorType) {
        this.sensorType = sensorType;
    }
}
