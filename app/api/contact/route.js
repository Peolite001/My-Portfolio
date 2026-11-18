import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide name, email, and message.' },
        { status: 400 }
      );
    }

    const recipientEmail = 'praisegodebubechukwu@gmail.com';
    const formSubmitUrl = `https://formsubmit.co/ajax/${recipientEmail}`;

    // FormSubmit strictly requires Origin and Referer headers
    const incomingOrigin = request.headers.get('origin');
    const incomingReferer = request.headers.get('referer');
    const origin = incomingOrigin || incomingReferer || 'http://localhost:3000';

    const res = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': origin,
        'Referer': incomingReferer || `${origin}/contact`,
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _subject: `New Portfolio Message from ${name.trim()}`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = await res.json().catch(() => ({}));

    // FormSubmit returns { success: 'false', message: "This form needs Activation..." } on first submit
    if (data?.message && data.message.toLowerCase().includes('activation')) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message:
          "FormSubmit has sent an activation email to praisegodebubechukwu@gmail.com. Please check your inbox (or spam folder) and click 'Activate Form' to activate.",
        data,
      });
    }

    if (res.ok && (data?.success === 'true' || data?.success === true)) {
      return NextResponse.json({
        success: true,
        needsActivation: false,
        message: 'Message delivered successfully.',
        data,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: data?.message || 'Failed to submit message to email service.',
        },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred while sending your message.',
      },
      { status: 500 }
    );
  }
}
