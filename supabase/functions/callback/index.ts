// @ts-ignore
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if (!code) {
      return new Response(
        JSON.stringify({ error: "No code received from GitHub" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // @ts-ignore
    const CLIENT_ID = Deno.env.get("CLIENT_ID")!;
    // @ts-ignore
    const CLIENT_SECRET = Deno.env.get("CLIENT_SECRET")!;
    // @ts-ignore
    const REDIRECT_URI = Deno.env.get("REDIRECT_URI")!;

    // @ts-ignore
    const redirectUri = "https://roboticspec.com/pyq/#/";
    // Uncomment for debugging
    // const redirectUri = "http://localhost:8080/";

    // Exchange code for an access token
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
          redirect_uri: REDIRECT_URI,
        }),
      }
    );

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      throw new Error("GitHub authentication failed");
    }

    return new Response(null, {
      status: 302,
      headers: { Location: `${redirectUri}?access_token=${accessToken}` },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error exchanging code for token",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
});
