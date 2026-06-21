CC ?= cc
CFLAGS ?= -O2 -std=c17 -Wall -Wextra -Wpedantic -pthread
PKG_CFLAGS := $(shell pkg-config --cflags libmicrohttpd jansson libcurl openssl sqlite3 2>/dev/null)
PKG_LIBS := $(shell pkg-config --libs libmicrohttpd jansson libcurl openssl sqlite3 2>/dev/null)

all: warehouse-blog-server

warehouse-blog-server: src/main.c
	$(CC) $(CFLAGS) $(PKG_CFLAGS) -o $@ $< $(PKG_LIBS)

clean:
	rm -f warehouse-blog-server

.PHONY: all clean
