CREATE TABLE public.devices
(
    device_id bigserial NOT NULL,
    serial_code character varying NOT NULL,
    model character varying NOT NULL,
    producer character varying NOT NULL,
    unit character varying NOT NULL,
    min_value double precision NOT NULL,
    max_value double precision NOT NULL,
    CONSTRAINT id PRIMARY KEY (device_id),
    CONSTRAINT unique_serial UNIQUE (serial_code)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.devices
    OWNER to zpr;
