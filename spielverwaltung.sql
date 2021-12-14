--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0
-- Dumped by pg_dump version 13.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: mannschaften; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mannschaften (
    id integer NOT NULL,
    name character varying(50),
    liga character varying(50)
);


ALTER TABLE public.mannschaften OWNER TO postgres;

--
-- Name: mannschaften_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mannschaften_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mannschaften_id_seq OWNER TO postgres;

--
-- Name: mannschaften_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mannschaften_id_seq OWNED BY public.mannschaften.id;


--
-- Name: spiele; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.spiele (
    id integer NOT NULL,
    stadion character varying(70),
    datum date,
    zeit time without time zone,
    heim integer,
    auswaerts integer
);


ALTER TABLE public.spiele OWNER TO postgres;

--
-- Name: spiele_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.spiele_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spiele_id_seq OWNER TO postgres;

--
-- Name: spiele_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.spiele_id_seq OWNED BY public.spiele.id;


--
-- Name: mannschaften id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mannschaften ALTER COLUMN id SET DEFAULT nextval('public.mannschaften_id_seq'::regclass);


--
-- Name: spiele id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spiele ALTER COLUMN id SET DEFAULT nextval('public.spiele_id_seq'::regclass);


--
-- Data for Name: mannschaften; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mannschaften (id, name, liga) FROM stdin;
1	Hafnerbach	2. Klasse Traisental/AV
2	SC St. Pölten	2. Klasse Traisental/AV
3	Pyhra	2. Klasse Traisental/AV
4	Purkersdorf	2. Klasse Traisental/AV
5	Neulengbach	2. Klasse Traisental/AV
6	Türnitz	2. Klasse Traisental/AV
7	Bischofstetten	2. Klasse Traisental/AV
8	Eichgraben	2. Klasse Traisental/AV
9	Frankenfels	2. Klasse Traisental/AV
10	Wilhelmsburg	2. Klasse Traisental/AV
11	Böheimkirchen	2. Klasse Traisental/AV
12	SG Hohenberg/St.Aegyd	2. Klasse Traisental/AV
13	Traisen	2. Klasse Traisental/AV
14	Harland	2. Klasse Traisental/AV
15	Maria Anzbach	2. Klasse Traisental/AV
16	Altlengbach	2. Klasse Traisental/AV
\.


--
-- Data for Name: spiele; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.spiele (id, stadion, datum, zeit, heim, auswaerts) FROM stdin;
1	Sportplatz Eichgraben SV	2021-12-05	14:00:00	8	1
2	Harland	2021-11-13	14:00:00	14	13
3	Wilheimsburg	2021-11-13	14:00:00	10	2
4	Böheimkirchen	2021-11-13	14:00:00	11	9
5	Sportanlage Peichberg	2021-11-13	15:00:00	4	1
\.


--
-- Name: mannschaften_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mannschaften_id_seq', 16, true);


--
-- Name: spiele_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.spiele_id_seq', 5, true);


--
-- Name: mannschaften mannschaften_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mannschaften
    ADD CONSTRAINT mannschaften_pk PRIMARY KEY (id);


--
-- Name: spiele spiele_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spiele
    ADD CONSTRAINT spiele_pk PRIMARY KEY (id);


--
-- Name: spiele spiele_mannschaften_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spiele
    ADD CONSTRAINT spiele_mannschaften_id_fk FOREIGN KEY (heim) REFERENCES public.mannschaften(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: spiele spiele_mannschaften_id_fk_2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spiele
    ADD CONSTRAINT spiele_mannschaften_id_fk_2 FOREIGN KEY (auswaerts) REFERENCES public.mannschaften(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

