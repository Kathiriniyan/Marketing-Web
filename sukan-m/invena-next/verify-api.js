
const fs = require('fs');
const path = require('path');

async function testCareerApi() {
    const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';

    // Create a dummy PDF file content
    const fileContent = 'Dummy PDF content';

    // Construct the multipart body
    let body = '';
    body += `--${boundary}\r\n`;
    body += `Content-Disposition: form-data; name="fullName"\r\n\r\nTest User\r\n`;
    body += `--${boundary}\r\n`;
    body += `Content-Disposition: form-data; name="email"\r\n\r\ntest@example.com\r\n`;
    body += `--${boundary}\r\n`;
    body += `Content-Disposition: form-data; name="phone"\r\n\r\n1234567890\r\n`;
    body += `--${boundary}\r\n`;
    body += `Content-Disposition: form-data; name="role"\r\n\r\nTest Role\r\n`;
    body += `--${boundary}\r\n`;
    body += `Content-Disposition: form-data; name="coverLetter"\r\n\r\nThis is a test cover letter.\r\n`;
    body += `--${boundary}\r\n`;
    body += `Content-Disposition: form-data; name="cv"; filename="test_cv.pdf"\r\n`;
    body += `Content-Type: application/pdf\r\n\r\n`;
    body += `${fileContent}\r\n`;
    body += `--${boundary}--\r\n`;

    try {
        const res = await fetch('http://localhost:3000/api/career', {
            method: 'POST',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${boundary}`,
            },
            body: body
        });

        const text = await res.text();
        console.log(`Status: ${res.status}`);
        console.log(`Response: ${text}`);

    } catch (err) {
        console.error("Fetch error:", err);
    }
}

testCareerApi();
