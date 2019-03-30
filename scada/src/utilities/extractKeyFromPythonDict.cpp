#include<string>
#include<boost/python.hpp>

#include"utilities/utilities.hpp"

namespace zpr {

std::string extractKeyFromPythonDict(boost::python::dict& dict, std::string key){
    if(dict.has_key(key)) {
        boost::python::object keyValue = dict.get(key);
        return boost::python::extract<std::string>(keyValue);
    }
    else return std::string("");
}

}