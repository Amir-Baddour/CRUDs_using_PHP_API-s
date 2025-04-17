<?php
class Connection {
    private $server = 'localhost';
    private $dbname = 'sample';
    private $user = 'root';
    private $pass = '';

    public function connect() {
        $conn = new mysqli($this->server, $this->user, $this->pass, $this->dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Database Error: " . $conn->connect_error);
        }

        return $conn;
    }
}

?>