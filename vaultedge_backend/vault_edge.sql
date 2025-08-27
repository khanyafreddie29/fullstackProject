CREATE DATABASE vault_edge;

USE vault_edge;

CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) UNIQUE NOT NULL,
    phone_number VARCHAR(10) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL,
    reset_token VARCHAR(225) NULL,
    reset_token_expiry DATETIME NULL
);

CREATE TABLE contact_messages (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    company VARCHAR(150),
    email VARCHAR(250) NOT NULL,
    phone_country VARCHAR(10),
    phone_number VARCHAR(20),
    message TEXT NOT NULL,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE products (
	product_id VARCHAR(10) PRIMARY KEY,
    product_name VARCHAR(250) NOT NULL,
    product_brand VARCHAR(50) NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    product_description TEXT,
    product_url VARCHAR(300) NOT NULL
); 
       
INSERT INTO products (product_id,product_name,product_brand,product_price,product_description,product_url)
VALUES ('GNC-BATNI','Nest Cam (outdoor or indoor, battery)','Google',949.99,'Battery-powered 1080p smart camera with intelligent alerts for flexible indoor/outdoor use','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/Nest%20Cam%20(outdoor%20or%20indoor%2C%20battery).png'),
	   ('GNC-BATOPC','Nest Cam + outdoor power cable','Google',999.99,'All-weather 1080p camera with outdoor power cable and motion detection','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/Nest%20Cam%20%2B%20outdoor%20power%20cable.png'),
	   ('GNC-FL','Nest Cam with floodlight','Google',1249.99,'1080p camera with integrated floodlight, two-way audio, and intelligent alerts','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/Nest%20Cam%20with%20floodlight.png'),
	   ('GNC-WIR','Nest Cam (indoor, wired)','Google',799.99,'Wired indoor HD smart camera with continuous streaming and smart alerts','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/Nest%20Cam%20(indoor%2C%20wired).png'),
	   ('GND-WIR','Nest Doorbell (wired)','Google', 2599.99,'Always-powered HDR video doorbell with two-way talk and instant notifications','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/Nest%20Doorbell%20(wired).jpg'),
	   ('GND-BAT','Nest Doorbell (battery)','Google',1599.99,'Wire-free HD video doorbell with package detection and long battery life','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/Nest%20Doorbell%20(battery).jpg'),
	   ('GNH','Nest Hub','Google',1099.99,'Smart display with voice control and smart home integration','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/Nest%20Hub.webp'),
	   ('GHN-MAX','Nest Hub Max','Google',1699.99,'Larger smart display with HD video calls and built-in camera','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/Nest%20Hub%20Max.webp'),
	   ('GFAS-SC5','First Alert SC5 Smart Smoke & CO Alarm','Google',599.99,'Wi-Fi smoke and CO detector with smart alerts and voice notifications','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/First%20Alert%20SC5%20Smart%20Smoke%20%26%20Carbon%20Monoxide%20Alarm.webp'),
	   ('GNYL-LOCK','Nest x Yale Lock','Google',1299.99,'Key-free smart deadbolt with remote control and Google Home integration','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Google/Nest%20x%20Yale%20Lock.webp'),
	   ('EBS-FS01','EBSF850 Facial Terminal','ERS Biometric',4499.99,'Facial recognition terminal with infrared anti-spoofing and contactless access','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/ERS-Biometric/EBSF850%20FACIAL%20TERMINAL.jpg'),
	   ('EBS-FS02','EBSF850 Facial Terminal – 02','ERS Biometric',4599.99,'Dual-camera infrared facial terminal with enhanced anti-spoofing','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/ERS-Biometric/EBSF850%20FACIAL%20TERMINAL_02.jpg'),
	   ('EBZ-FP101','EBZ101 Fingerprint Terminal','ERS Biometric',5999.99,'High-speed fingerprint terminal with touchscreen and secure access','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/ERS-Biometric/EBZ101%20FINGERPRINT%20TERMINAL.jpg'),
	   ('EBZ-FP02','EBZU02 Fingerprint Terminal','ERS Biometric',6299.99,'Upgraded fingerprint terminal with enhanced accuracy and encrypted logs','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/ERS-Biometric/EBZU02%20FINGERPRINT%20TERMINAL.jpg'),
	   ('XSC-C200','Xiaomi Smart Camera C200','Xiaomi',899.99,'Compact indoor 1080p camera with 360° panoramic view and AI motion detection','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Xiaomi%20Smart%20Camera%20C200.webp'),
	   ('XOC-C300','Xiaomi Outdoor Camera CW300','Xiaomi',1099.99,'Weatherproof 2K outdoor camera with wide-angle lens and advanced motion tracking','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Xiaomi%20Outdoor%20Camera%20CW300.webp'),
	   ('XSC-C300D','Xiaomi Smart Camera C300 Dual','Xiaomi',1199.99,'Dual-lens 2K camera with panoramic coverage and color night vision','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Xiaomi%20Smart%20Camera%20C300%20Dual.webp'),
	   ('XSC-C500D','Xiaomi Smart Camera C500 Dual','Xiaomi',1399.99,'Dual-lens 2.5K camera with AI tracking and starlight night vision','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Xiaomi%20Smart%20Camera%20C500%20Dual.webp'),
	   ('XSC-C700','Xiaomi Smart Camera C700','Xiaomi',1599.99,'4K Ultra HD indoor/outdoor camera with AI intrusion alerts and quick pan/tilt','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Xiaomi%20Smart%20Camera%20C700.webp'),
	   ('XOC-C700S','Xiaomi Outdoor Camera CW700S','Xiaomi',1699.99,'4K outdoor camera with motorized PTZ and AI person/vehicle detection','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Xiaomi%20Outdoor%20Camera%20CW700S.webp'),
	   ('XSD-3S','Xiaomi Smart Doorbell 3S','Xiaomi',1299.99,'Wire-free smart doorbell with HD video, AI detection, and rechargeable battery','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Xiaomi%20Smart%20Doorbell%203S.webp'),
	   ('XDW-SEN2','Mi Door and Window Sensor 2','Xiaomi',299.99,'Wireless sensor with instant alerts and low power operation','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Mi%20Door%20and%20Window%20Sensor%202.webp'),
	   ('XSD-3','Xiaomi Smart Doorbell 3','Xiaomi',1199.99,'Smart doorbell with HD video, two-way audio, and motion detection','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Xiaomi%20Smart%20Doorbell%203.webp'),
	   ('XSH-HUB2','Xiaomi Smart Home Hub 2','Xiaomi',899.99,'Smart home hub supporting Zigbee/Wi-Fi with multi-device automation','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Xiaomi%20Smart%20Home%20Hub%202.webp'),
	   ('XWD-SEN','Mi Window and Door Sensor','Xiaomi',249.99,'Wireless door/window sensor with magnetic detection and efficient battery life','https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Xiaomi/Mi%20Window%20and%20Door%20Sensor.webp');
     
CREATE TABLE packages (
	package_id VARCHAR(10) PRIMARY KEY,
    package_name VARCHAR(150) NOT NULL,
    package_descript TEXT NOT NULL,
    package_price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2) NOT NULL,
    discount_amount DECIMAL(10,2) NOT NULL,
    includes TEXT NOT NULL,
    package_url VARCHAR(300)NOT NULL
);


INSERT INTO packages (package_id,package_name,package_descript,package_price,original_price,discount_amount,includes,package_url)
VALUES ('PKG001','Basic Office Surveillance','Ideal for small offices and homes seeking essential monitoring capabilities.', 3300,3990,690,
		'["2x Xiaomi White C200 Smart Cameras", "1x Google Nest Cam (wired)", "1x Google Nest Doorbell (battery)", "Mobile App Integration", "Bundle Discount: R690 OFF"]',
        'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Packages/PACKAGE%201.png'
		),
	   ('PKG002','Standard Office Security','Ideal for indoor and outdoor monitoring systems with secure entry access control.',5200,9500,2300,
       '["1x Xiaomi White C200 Smart Camera","1x Xiaomi White CW300 Outdoor Camera","1x Google Nest Doorbell (battery)","1x EBZ101 Fingerprint Terminal","Advanced Access Control","Bundle Discount: R2,300 OFF"]',
       'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Packages/PACKAGE%202.png'
       ),
	   ('PKG003','Smart Entry Essentials','Ideal for companies focused on secure access control and entry management.', 3900,8500,3600,
       '["1x Google Nest Doorbell (wired)","1x EBZ101 Fingerprint Terminal","Secure Entry Control System","Visitor Management Features","Bundle Discount: R3,600 OFF"]',
       'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Packages/PACKAGE%203.png'
       ),
	   ('PKG004','Home Starter Pack','Ideal for small apartments or flats seeking basic home security coverage.',1400,1590,190,
       '["1x Google Nest Cam (wired)","1x Xiaomi White C200 Smart Camera","Easy Setup & Installation","Mobile App Access","Bundle Discount: R190 OFF"]',
       'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Packages/PACKAGE%204.png'
       ),
	   ('PKG005','Home Full Pack','Ideal for homes that want comprehensive access control and complete monitoring coverage.',4900,6355,1455,
       '["1x Xiaomi White C200 Smart Camera","1x Xiaomi White CW300 Outdoor Camera","1x Google Nest Cam (battery)","1x Google Nest Doorbell (battery)","Complete Indoor/Outdoor Coverage","Advanced Mobile App Features","Bundle Discount: R1,455 OFF"]',
       'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Packages/PACKAGE%205.png'
       );
       
-- CREATE TABLE deals (
-- 	deal_id VARCHAR(10) PRIMARY KEY,
--     deal_name VARCHAR (150) NOT NULL,
--     deal_description VARCHAR(300) NOT NULL,
--     deal_category VARCHAR(150) NOT NULL,
--     comment VARCHAR(50),
--     deal_price DECIMAL(10,2) NOT NULL,
-- 	original_price DECIMAL(10,2) NOT NULL,
--     discount DECIMAL(10,2) NOT NULL,
--     monitoring_price DECIMAL(10,2) NOT NULL,
--     contract_note VARCHAR(300) NOT NULL,
-- 	includes TEXT NOT NULL,
--     deal_url VARCHAR(300)NOT NULL
-- );

-- INSERT INTO deals (deal_id,deal_name,deal_description,deal_category,comment,deal_price,original_price,discount,monitoring_price,contract_note,includes,deal_url)
-- VALUES ('DEAL001','Pro Install Complete','Whole-home protection with expert setup','Pro Install','Best value',4999,6299,21,349,'36-month monitoring may apply.',
-- 		'["Touchscreen panel", "4x Entry sensors", "x Motion", "Yard sign & decals"]',
--         'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Deals/Pro%20Install%20Complete.avif'
--         ),
-- 	   ('DEAL002','Video Doorbell + Chime','Front-door awareness & smart alerts','Doorbells',NULL,999,1499,33,0,'No monitoring required.',
--        '["HD doorbell cam", "Wireless chime", "Two-way talk", "Motion detection"]',
--        'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Deals/Video%20Doorbell%20%2B%20Chime.webp'
--        ),
-- 	   ('DEAL003','Self-Setup Essentials','Quick start kit for apartments & small homes','DIY','Limited time',1499,1999,25,199,'DIY month-to-month.',
--        '["Smart hub", "2x Entry sensors", "1x Motion", "Mobile app + alerts"]',
--        'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Deals/Self-Setup%20Essentials.avif'
--        ),
-- 	   ('DEAL004','DIY Life Safety Bundle','Smoke, CO & intrusion alerts','DIY',NULL,1999,2699,26,249,'DIY month-to-month.',
-- 	   '["Hub + app", "3x Entry sensors", "1x Motion", "Smoke & CO alerts"]',
--        'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Deals/DIY%20Life%20Safety%20Bundle.png'
--        ),
-- 	   ('DEAL005','3-Cam Smart Video','Crystal-clear video with cloud clips','Cameras','Limited time',3499,4499,22,249,'DIY or pro install.',
--        '["2x Outdoor cams", "1x Indoor cam", "Smart notifications", "Cloud recording"]',
--        'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Deals/3-Cam%20Smart%20Video.jpg'
--        ),
-- 	   ('DEAL006','Pro Install — Smart Video','Full system + 2 cameras','Pro Install',NULL,5799,7399,22,399,'36-month monitoring may apply.',
--        '["Panel + app", "5x Entry sensors", "2x Motion", "2x Smart cameras"]',
--        'https://raw.githubusercontent.com/zoe-petersen/VaultEdge_Images/refs/heads/Deals/Pro%20Install%20%E2%80%94%20Smart%20Video.png'
--        );
       
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    status ENUM('pending', 'processing', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE cart (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(250) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    payment_method VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'completed', 'failed', 'refunded') NOT NULL DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

ALTER TABLE products
ADD video_url VARCHAR(255) NULL;

UPDATE products
SET video_url = 'https://storage.googleapis.com/mannequin/blobs/888c9e38-5e6c-46de-87a1-158e02bf1e29.mp4'
WHERE product_name = 'Google Nest Cam (Wired)';

UPDATE products
SET video_url = 'https://storage.googleapis.com/mannequin/blobs/888c9e38-5e6c-46de-87a1-158e02bf1e29.mp4'
WHERE product_id = 'GNC-WIR';

UPDATE products
SET video_url = 'https://storage.googleapis.com/mannequin/blobs/67242829-9a6d-4ebf-9b2b-6e6b746ef234.mp4'
WHERE product_id = 'GNC-BATNI';

UPDATE products
SET video_url = 'https://storage.googleapis.com/mannequin/blobs/d728ef58-7214-40dc-8acd-f1eda22ff310.mp4'
WHERE product_id = 'GNC-FL'