--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

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
-- Name: mahasiswa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mahasiswa (
    npm integer NOT NULL,
    nama text NOT NULL,
    jurusan text NOT NULL,
    angkatan bigint NOT NULL
);


ALTER TABLE public.mahasiswa OWNER TO postgres;

--
-- Name: peserta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.peserta (
    npm integer,
    kode_proker integer,
    kepentingan integer NOT NULL,
    kepuasan integer NOT NULL,
    komentar text,
    CONSTRAINT peserta_kepentingan_check CHECK (((kepentingan >= 1) AND (kepentingan <= 4))),
    CONSTRAINT peserta_kepuasan_check CHECK (((kepuasan >= 1) AND (kepuasan <= 4)))
);


ALTER TABLE public.peserta OWNER TO postgres;

--
-- Name: proker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proker (
    id integer NOT NULL,
    nama_proker text NOT NULL,
    nama_bidang text NOT NULL
);


ALTER TABLE public.proker OWNER TO postgres;

--
-- Data for Name: mahasiswa; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mahasiswa (npm, nama, jurusan, angkatan) FROM stdin;
134	John	Teknik Elektro	2018
156	Dave	Teknik Komputer	2018
22	Tony	Teknik Biomedik	2019
\.


--
-- Data for Name: peserta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peserta (npm, kode_proker, kepentingan, kepuasan, komentar) FROM stdin;
156	1	4	4	very nice
134	1	4	4	mantap
134	2	3	3	oke
134	4	4	4	keren!
156	3	4	4	goks
156	6	4	3	mantep bat
\.


--
-- Data for Name: proker; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proker (id, nama_proker, nama_bidang) FROM stdin;
2	Distro	Kastrat
3	Sociotalk	Pengmas
4	LDKM	Kema
1	TechnoSkill	PIPTEK
5	Media Sosial	Kominfo
6	Latihan Rutin	Siwa
7	PSB Genap	Kominfo
\.


--
-- Name: mahasiswa mahasiswa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mahasiswa
    ADD CONSTRAINT mahasiswa_pkey PRIMARY KEY (npm);


--
-- Name: proker proker_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proker
    ADD CONSTRAINT proker_pkey PRIMARY KEY (id);


--
-- Name: peserta peserta_kode_proker_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peserta
    ADD CONSTRAINT peserta_kode_proker_fkey FOREIGN KEY (kode_proker) REFERENCES public.proker(id);


--
-- Name: peserta peserta_npm_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peserta
    ADD CONSTRAINT peserta_npm_fkey FOREIGN KEY (npm) REFERENCES public.mahasiswa(npm);


--
-- PostgreSQL database dump complete
--

