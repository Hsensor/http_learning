Stalled/Blocking
Time the request spent waiting before it could be sent. This time is
inclusive of any time spent in proxy negotiation. Additionally, this
time will include when the browser is waiting for an already
established connection to become available for re-use, obeying
Chrome's maximum six TCP connection per origin rule.

Proxy Negotiation
Time spent negotiating with a proxy server connection.

DNS Lookup
Time spent performing the DNS lookup. Every new domain on a pagerequires a full roundtrip to do the DNS lookup.

Initial Connection / Connecting
Time it took to establish a connection, including TCPhandshakes/retries and negotiating a SSL.

SSL
Time spent completing a SSL handshake.

Request Sent / Sending
Time spent issuing the network request. Typically a fraction of amillisecond.

Waiting (TTFB)
Time spent waiting for the initial response, also known as the Time To
First Byte. This time captures the latency of a round trip to the
server in addition to the time spent waiting for the server to deliver
the response.

Content Download / Downloading
Time spent receiving the response data.