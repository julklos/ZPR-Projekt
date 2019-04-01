.PHONY: all

all: 
	cd `pwd`/scada && scons

scada:
	cd `pwd`/scada && scons

lint:
	astyle --project scada/src/*.cpp
	find . -name '*.orig' -delete

clean:
	rm -rf scada/build/*
	rm scada/libscada.so

test:
	pytest --ignore=scada
	newman run ZPR.postman_collection.json 
