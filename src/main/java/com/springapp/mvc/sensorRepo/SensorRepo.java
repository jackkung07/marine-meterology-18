package com.springapp.mvc.sensorRepo;

import com.springapp.mvc.sensorEntity.VsensorInfo;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by ivanybma on 5/13/16.
 */
public interface SensorRepo extends CrudRepository<VsensorInfo, String>, SensorRepoCustom {

    @Query("{'_id' : ?0}")
    public VsensorInfo findById(String id);

    @Query("{'vsensorId' : ?0}")
    public VsensorInfo findByVsensorId(String vsensorId);
}