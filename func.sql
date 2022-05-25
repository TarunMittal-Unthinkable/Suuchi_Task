CREATE OR REPLACE FUNCTION data() 
   RETURNS TABLE (name text, city_name text, company_name text) 
AS $$
BEGIN
   RETURN QUERY 
   select p.name,c.city_name,c1.company_name from 
person as p
join city as c
on p.city_id=c.city_id
join company as c1
on p.company_id=c1.company_id;
end;
$$ 
LANGUAGE plpgsql;


CREATE or replace PROCEDURE city(city_id integer,city_name text) AS $$
BEGIN
   insert into city(city_id,city_name) values(city_id,city_name);
END;
$$ LANGUAGE plpgsql;

