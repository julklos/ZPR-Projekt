#ifndef __MEASUREMENT_CONTROLLER_HPP_
#define __MEASUREMENT_CONTROLLER_HPP_

#include<string>
#define BOOST_PYTHON_STATIC_LIB
#include<boost/python.hpp>
#include<boost/python/dict.hpp>
#include<boost/python/tuple.hpp>
#include"controllers/DatabaseController.hpp"
#include"controllers/RESTServiceController.hpp"

namespace zpr {

/**
* Kontroler pomiarów przychodzących z zewnętrznych urządzeń.
*/
class MeasurementController : public DatabaseController, public RESTServiceController {
    public:
        /**
         * Konstruktor kontrolera, inicjuje parametry aktualnie wykonywanej transakcji.
         * @param env - zmienna konfiguracjyna, inicjuje kontroler bazy danych wartościami potrzebnymi
         * do uwierzytelnienia i uzyskania połączenia.
         */
        MeasurementController(const boost::python::dict& env) : DatabaseController(env) {}

        /**
         * Dodaje pomiar do bazy danych i ustawia odpowiedni status.
         * @param request - słownik z atrybutami uzyskanymi z HTTP POST, zawierającymi
         */
        std::string postNewMeasurement(const boost::python::dict& request);
};

}
#endif //__MEASUREMENT_CONTROLLER_HPP_
