#define BOOST_PYTHON_STATIC_LIB
#include<boost/python.hpp>
#include<boost/python/dict.hpp>
#include<boost/python/list.hpp>

#include<vector>
#include<memory>
#include<pqxx/pqxx>
#include<iostream>
#include"services/SerializationService.hpp"
#include"mappers/Measurement.hpp"
#include<string>



namespace zpr {

const int SerializationService::maxSamples = 163;



boost::python::dict SerializationService::mapToPythonDict(std::unique_ptr<std::vector<Measurement>> measurements) {
    boost::python::dict result;
    boost::python::list list;
    measurements = this->resample(std::move(measurements));

    for(auto it = measurements->begin(); it != measurements->end(); ++it) {
        boost::python::dict data;
        data["value"] = it->getValue();
        data["timestamp"] = it->getTimestamp();
        list.append(data);
    }

    int deviceId;
    deviceId = measurements->at(0).getDeviceId();
    result["deviceId"] = deviceId;
    result["data"] = list;
    return result;
}


std::unique_ptr<std::vector<Measurement>> SerializationService::resample(std::unique_ptr<std::vector<Measurement>> measurements) {
    if(!(measurements->size() <= this->maxSamples)) {
        double freq;
        std::unique_ptr<std::vector<Measurement>> resampledMeasurements = std::make_unique<std::vector<Measurement>>();
        freq = floor(measurements->size()/this->maxSamples);

        for (int i = 1; i <= maxSamples; ++i) {
            resampledMeasurements->push_back(measurements->at(static_cast<int>(i*freq-1)));
        }

        return resampledMeasurements;

    } else
        return measurements;
}

}