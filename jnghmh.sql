CREATE TABLE booking
(
booking_no VARCHAR(50) primary key,
pickup_from VARCHAR(50)not null,
drop_at varchar(50)not null,
customer_id varchar(50) not null references customer(id),
vehicle_no varchar(50) not null references car(vehicle_no),
driver_id varchar(50) not null references driver(id),
fare decimal (7,2) not null
);
CREATE TABLE customer
(
id varchar(50) primary key,
user_name varchar(50) not null,
city varchar(50) not null
); 
CREATE TABLE car
(
vehicle_no varchar(50) primary key,
vehicle_model varchar(50),
vehicle_type varchar(50)not null,
vehicle_color varchar(50)
);
CREATE TABLE driver
(
id varchar(50) primary key,
driver_name varchar(50) not null,
gender varchar(50),
age int(11)
);
CREATE TABLE booking
(
booking_no VARCHAR(50) primary key,
pickup_from VARCHAR(50)not null,
drop_at varchar(50)not null,
customer_id varchar(50) not null references customer(id),
vehicle_no varchar(50) not null references car(vehicle_no),
driver_id varchar(50) not null references driver(id),
fare decimal (7,2) not null
);
CREATE TABLE Customer
(
id varchar(50) primary key,
user_name varchar(50) not null,
city varchar(50) not null
); 
CREATE TABLE car
(
vehicle_no varchar(50) primary key,
vehicle_model varchar(50),
vehicle_type varchar(50)not null,
vehicle_color varchar(50)
);
CREATE TABLE driver
(
id varchar(50) primary key,
driver_name varchar(50) not null,
gender varchar(50),
age int(11)
);
CREATE TABLE city_locations
(
from_city varchar(50) not null,
to_city varchar(50) not null,
distance int(11) not null
);
select * from booking;
insert into booking
values 
(101,'Manali','Tirupathi', 'harini30@gmail.com', 'TN20M1862', '999' , 8000.00),
(102,'Ambattur','Thrissur', 'lokhitha21@gmail.com', 'TN18X2180', '998' , 10000.00),
(103,'Anna Nagar','Goa', 'ashwin22@gmail.com', 'TN20L1234', '997' , 25000.00),
(104,'Ayanavaram','Bangalore', 'yokesh50@gmail.com', 'TN06N8907', '996' , 20000.00),
(105,'T.Nagar','Hyderabad', 'bharath99@gmail.com', 'TN10I1902', '995' , 7500.00);

select * from customer;
insert into customer
values
('harini30@gmail.com','Harini','Chennai'),
('lokhitha21@gmail.com','Lokhitha','Vellore'),
('ashwin22@gmail.com','Ashwin','Coimbatore'),
('yokesh50@gmail.com','Yokesh','kottayam'),
('bharath99@gmail.com','Bharath','Villupuram');
select * from car;
insert into car
values
( 'TN20M1862', 'TataNano' , '4-seater' , 'Red'),
( 'TN18X2180', 'TataAltroz' , '5-seater' , 'Silver'),
( 'TN20L1234', 'KiaCarens' , '6-seater' , 'Blue'),
( 'TN06N8907', 'ToyatoInnova' , '7-seater' , 'Black'),
( 'TN10I1902', 'TataStarBus' , '12-seater' , 'White');
 
 select * from driver;
insert into driver
values
('999', 'Ganeshan' , 'Male' ,45),
('998', 'Kumar' , 'Male' ,35),
('997', 'Sathish' , 'Male' ,24),
('996', 'Saroja' , 'Female' ,32),
('995', 'Moorthy' , 'Male' ,52);

select * from city_locations;
insert into city_locations
values
( 'Manali','Tirupathi', 128),
('Ambattur','Thrissur', 608),
('Anna Nagar','Goa', 887),
('Ayanavaram','Bangalore', 346),
('T.Nagar','Hyderabad', 632);

CREATE TABLE admin
(
admin_id VARCHAR(50) PRIMARY KEY,
admin_name varchar(50)
);
insert into admin
values
('901','David'),
('902','Micharl'),
('903','John'),
('904','Kevin'),
('905','Mark');

CREATE TABLE previousbooking(
c_date varchar(50) primary key,
c_pickup_point varchar(50),
c_destination varchar(50),
c_cartype varchar(50),
c_payment varchar(50)
);
select * from previousbooking;
insert into previousbooking
values
('1-1-2022','mumbai','pondicherry','4-seater',9000.00),
('30-09-2022','ambattur','australia','6-seater', 6000.00),
('2-1-2022','ayanavaram','hungary','5-seater',12161.00),
('9-1-2022','manali','maangaaadu','7-seater',55779.00),
('1-9-2022','adayar','avadi','12-seater',70396.00);

alter table previousbooking modify c_payment decimal(7,2);
alter table previousbooking change COLUMN c_payment c_fare decimal(7,2);
alter table previousbooking modify c_fare decimal(7,2) not null;