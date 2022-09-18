#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE dwpdb;
    \c dwpdb;
    CREATE USER dwpdb;
		ALTER USER dwpdb PASSWORD 'dwpdb';
    GRANT ALL PRIVILEGES ON DATABASE dwpdb TO dwpdb;
    CREATE SCHEMA IF NOT EXISTS webapp AUTHORIZATION dwpdb;
    ALTER role dwpdb in DATABASE dwpdb set search_path='dwpdb'
EOSQL
