-- Table: public.books

-- DROP TABLE public.books;

CREATE TABLE public.books
(
    id bigint NOT NULL,
    name character varying COLLATE pg_catalog."default",
    author character varying COLLATE pg_catalog."default",
    CONSTRAINT books_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.books
    OWNER to fourm;

INSERT INTO public.books(
	id, name, author)
	VALUES (1, 'book 1', 'author 1');
INSERT INTO public.books(
	id, name, author)
	VALUES (2, 'book 2', 'author 2');
INSERT INTO public.books(
	id, name, author)
	VALUES (3, 'book 3', 'author 3');
