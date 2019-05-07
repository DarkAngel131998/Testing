# Báo cáo các công cụ kiểm thử chất lượng hệ thống
## Nhóm 36:
- Đỗ Ngọc Duy
- Đồng Việt Hoàng
- Nguyễn Trường Giang
- Phạm Văn Đại

**1. Security Testing Tools: Arachni**
**Lỗi tìm được**
**1.1 Missing "Stric-Transport-Security" header - medium**
```
    The HTTP protocol by itself is clear text, meaning that any data that is transmitted via HTTP can be captured and the contents viewed. To keep data private and prevent it from being intercepted, HTTP is often tunnelled through either Secure Sockets Layer (SSL) or Transport Layer Security (TLS). When either of these encryption standards are used, it is referred to as HTTPS.

    HTTP Strict Transport Security (HSTS) is an optional response header that can be configured on the server to instruct the browser to only communicate via HTTPS. This will be enforced by the browser even if the user requests a HTTP resource on the same server.

    Cyber-criminals will often attempt to compromise sensitive information passed from the client to the server using HTTP. This can be conducted via various Man-in-The-Middle (MiTM) attacks or through network packet captures.

    Arachni discovered that the affected application is using HTTPS however does not use the HSTS header.
    (CWE)
```
**1.2. Missing "X-Frame-Options" header - low**
```
	Clickjacking (User Interface redress attack, UI redress attack, UI redressing) is a malicious technique of tricking a Web user into clicking on something different from what the user perceives they are clicking on, thus potentially revealing confidential information or taking control of their computer while clicking on seemingly innocuous web pages.

    The server didn’t return an X-Frame-Options header which means that this website could be at risk of a clickjacking attack.

    The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page inside a frame or iframe. Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.
    (CWE)
```
**1.3. Interesting response - infomational**
```
    The server responded with a non 200 (OK) nor 404 (Not Found) status code. This is a non-issue, however exotic HTTP response status codes can provide useful insights into the behavior of the web application and assist with the penetration test.
```
**video hướng dẫn:**https://www.youtube.com/watch?v=9y9BzDQSlYY&t=285s
**2. Performance: NeoLoad (by Nguyễn Huy Chương)**
**3. Accessibility: HTML_CODESNIFFER (by Nguyễn Chiến Thắng)**