---
title: Database connection in PHP with mysqli
slug: php-mysqli-essential
tags: php, mysql, mysqli-extension
date: 13 March, 2023
---

# Database connection in PHP with mysqli

In this tutorial we will se how to connect to mysql database with php using the mysqli extension.

MySQLi stands for MySQL Improved. It is a PHP extension used to connect to MySQL databases from PHP scripts. MySQLi is an improved version of the older MySQL extension for PHP, and it provides enhanced features such as support for prepared statements, transactions, and improved security.

### Define constant
Let's define some constant for configartion. You have to set database credentials according to yours. I have used the root user and no password with database name of `practice` here. 
```php
// config/constant.php
<?php
defined('DB_HOSTNAME') or define('DB_HOSTNAME', 'localhost');
defined('DB_USER') or define('DB_USER', 'root');
defined('DB_PASSWORD') or define('DB_PASSWORD', '');
defined('DB_DATABASE_NAME') or define('DB_DATABASE_NAME', 'practice'); 

```

### Create connection
Let's create a file called `database.php` inside the config folder. And paste the code as following. Mysqli support two different ways to connect to a database, OOP and procedural. We will see the both here. 

> Note: don't forget to include the `constant.php` file.
```php
// config/database.php
<?php

require_once('./constant.php');

/**
 * OOP way
 */
$oop_conn = new mysqli(DB_HOSTNAME, DB_USER, DB_PASSWORD, DB_DATABASE_NAME);

if ($oop_conn->connect_error) {
    die('Error in database connection : ' . $oop_conn->connect_errno . ' : ' . $oop_conn->connect_error);
}

/**
 * Procedural way
 */
$pro_conn = mysqli_connect(DB_HOSTNAME, DB_USER, DB_PASSWORD, DB_DATABASE_NAME);

if (mysqli_connect_error()) {
    die('Error in database connection : ' . mysqli_connect_errno() . ' : ' . mysqli_connect_error());
}
```

### Create table
We have successfully connected to a database. Now, let's do some query staffs. In the root file(`index.php`), let's require the `config/database.php` and let's create a table called `customers`. 

```php 
<?php
// index.php
require_once('config/database.php');

$create_customer_table_sql = "CREATE TABLE customers(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone INT(11) NULL,
    city VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
)";

// OOP WAY
// let's drop the table if it already exists
$drop_table_sql = 'DROP TABLE IF EXISTS customers';
if ($oop_conn->query($drop_table_sql)) {
    echo 'customers table dropped' . '<br>';
}

if ($oop_conn->query($create_customer_table_sql)) {
    echo 'Customer table created' . '<br>';
} else {
    echo 'Error table creation : ' . $oop_conn->error;
}

// PROCEDURAL WAY
// let's drop the table if it already exists
$drop_table_sql = 'DROP TABLE IF EXISTS customers';
if (mysqli_query($pro_conn, $drop_table_sql)) {
    echo 'customers table dropped' . '<br>';
}

if (mysqli_query($pro_conn, $create_customer_table_sql)) {
    echo 'Customer table created' . '<br>';
} else {
    echo 'Error table creation : ' . $oop_conn->error;
}
```

Now let's insert some data to the customer table. In this case we will go with the OOP ways. 
```php 
$customer_insert_sql = "INSERT INTO customers(name, email, phone, city) 
    VALUES(
        'Moniruzzaman Saikat',
        'saikat@gmail.com',
        01305666666,
        'Rangpur'
    )";

if ($oop_conn->query($customer_insert_sql)) {
    echo 'One customer inserted';
}
```

### MySQLi Prepared Statement
In the above examples we have inserted some rows into the table directly. Now, let's insert some more data using prepared statement.

Here, the `bind_param` method take the first parameter a string. Which is the the data-types for all the values to be inserted. We are inserting three string so that we have passed three 's' in a row. 

According to php manual, here are the data type character for the parameter: 
| Character | Description                                                  |
| --------- | ------------------------------------------------------------ |
| i         | corresponding variable has type int                          |
| s         | corresponding variable has type string                       |
| d         | corresponding variable has type float                        |
| b         | corresponding variable is a blob and will be sent in packets |

```php 
$name = 'Moniruzzaman Saikat';
$email = 'saikat@gmail.com';
$city = 'Rangpur';

$customer_query_sql = "INSERT INTO customers(name, email, phone, city) VALUES(?, ?, ?, ?)";
$customer_insert = $oop_conn->prepare($customer_query_sql);

// bind parameters
$customer_insert->bind_param('sss', $name, $email, $city);

if ($customer_insert->execute()) {
    echo 'Customer data inserted';
}
```


### Select rows from table
In this example we will see how to select data from table using both approches and also see how to query data as object or as array.

```php

$select_customers_sql = 'SELECT * FROM customers';

/**
 * OOP way
 */
$result = $oop_conn->query($select_customers_sql);

if ($result->num_rows > 0) {
    // fetch as object
    while ($row = $result->fetch_object()) {
        var_dump($row);
    }

    // fetch as array
    while ($row = $result->fetch_array()) {
        var_dump($row);
    }
}

/**
 * PROCEDURAL way
 */
$result = mysqli_query($pro_conn, $select_customers_sql);
if (mysqli_num_rows($result) > 0) {

    // fetch as object
    while ($row = mysqli_fetch_object($result)) {
        var_dump($row);
    }

    while ($row = mysqli_fetch_array($result)) {
        var_dump($row);
    }
}
```


So, that's it. Now you can update and delete by yourself. All are really simple to do. Keep learning 🤙