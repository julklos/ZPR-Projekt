#include<string>
#define BOOST_PYTHON_STATIC_LIB
#include<boost/python.hpp>
#include<boost/python/dict.hpp>
#include<boost/python/extract.hpp>
#include<boost/python/object.hpp>
#include<iostream>
#include"utilities/utilities.hpp"


namespace zpr {

std::string extractKeyFromPythonDict(const boost::python::dict& dict, std::string key) {
    if(dict.has_key(key)) {
        boost::python::object keyValue = dict.get(key);
        return boost::python::extract<std::string>(keyValue);

    } else throw KeyDoNotExistsException(key);
}

}