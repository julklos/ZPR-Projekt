#include<memory>
#include<map>

#define BOOST_PYTHON_STATIC_LIB
#include<boost/python.hpp>
#include<boost/python/dict.hpp>
#include"controllers/StateController.hpp"
#include"services/StateService.hpp"

namespace zpr {

double StateController::getValue(int deviceId) {
    StateService* state = StateService::getInstance();
    return state->getValue(deviceId);
}

boost::python::dict StateController::getState() {
    StateService* state = StateService::getInstance();
    this->statusCode = 200;
    return state->mapToPythonDict();
}

}