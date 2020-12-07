CREATE TABLE penilaian(
    id int NOT NULL PRIMARY KEY, 
    npm bigint NOT NULL, 
    angkatan bigint NOT NULL, 
    komentar text, 
    kepentingan int NOT NULL check(kepentingan >=1 
    AND kepentingan<=4), 
    kepuasan int NOT NULL check(kepuasan >=1 
    AND kepuasan<=4), 
    FOREIGN KEY (npm) REFERENCES mahasiswa(npm)
);

CREATE TABLE proker(id int NOT NULL PRIMARY KEY,
nama_proker text NOT NULL,
nama_bidang text NOT NULL,
kepentingan float NOT NULL, 
kepuasan float NOT NULL
);

CREATE TABLE peserta(npm int REFERENCES mahasiswa(npm), 
kode_proker int REFERENCES proker(id),
kepentingan int NOT NULL check(kepentingan >=1 
AND kepentingan<=4), 
kepuasan int NOT NULL check(kepuasan >=1 
AND kepuasan<=4),
komentar text
);



INSERT INTO proker VALUES(4, 'LDKM', 
'Kema', 3.52, 3.6);

INSERT INTO peserta VALUES(156, 1, 
4, 4, 'very nice'), (134, 1, 4, 4, 'mantap'), 
(134, 2, 3, 3, 'oke');


INSERT INTO peserta VALUES(134, 'John',
2018, 2, 3, 3, 'sudah bagus');

select proker.id, proker.nama_proker, proker.nama_bidang, 
trunc(avg(kepentingan), 1) as kepentingan, trunc(avg(kepuasan), 1) as kepuasan 
from proker left join
peserta on proker.id = peserta.kode_proker
group by proker.id;  

select proker.id, proker.nama_proker, proker.nama_bidang, 
trunc(avg(kepentingan), 1) as kepentingan, trunc(avg(kepuasan), 1) as kepuasan 
from proker left join
peserta on proker.id = peserta.kode_proker
where proker.id=1 group by proker.id;  


CREATE TABLE mahasiswa(npm int NOT NULL PRIMARY KEY, 
nama text NOT NULL, jurusan text NOT NULL, 
angkatan bigint NOT NULL);

DROP TABLE peserta;

INSERT INTO mahasiswa VALUES(134, 'John', 'Teknik Elektro', 
2018), (156, 'Dave', 'Teknik Komputer', 2018), (22, 'Tony', 
'Teknik Biomedik', 2019);