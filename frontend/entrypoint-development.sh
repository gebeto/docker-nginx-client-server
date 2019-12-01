#!/bin/sh

cp -r /frontend-cache/node_modules/. /frontend/node_modules/
exec yarn watch