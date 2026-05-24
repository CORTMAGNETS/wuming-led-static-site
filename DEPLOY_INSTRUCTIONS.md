# Wuming LED Static Site Deployment Instructions

I have prepared your code and created a GitHub repository. Follow these steps to complete the deployment to Cloudflare Pages and link your custom domain.

## 1. Push Code to GitHub

Open your terminal in this project directory and run the following commands:

```bash
git remote add origin https://github.com/CORTMAGNETS/wuming-led-static-site.git
git branch -M main
git push -u origin main
```

*(Note: If you haven't authenticated the `git` CLI, you will be prompted for your GitHub username and password/token.)*

## 2. Deploy to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your GitHub account and the repository `wuming-led-static-site`.
4. Click **Begin setup**.
5. **Project name**: `wuming-led-static-site`
6. **Production branch**: `main`
7. **Build settings**:
   - Framework preset: `None`
   - Build command: (Leave empty)
   - Build output directory: `.`
8. Click **Save and Deploy**.

## 3. Configure Custom Domain (wmlights.com)

1. Once the deployment is finished, go to the **Custom domains** tab of your Pages project.
2. Click **Set up a custom domain**.
3. Enter `wmlights.com` (and optionally `www.wmlights.com`).
4. Click **Continue**.
5. Cloudflare will provide a CNAME target (likely `wuming-led-static-site.pages.dev`).

### Update DNS on Alibaba Cloud (Aliyun)

1. Log in to the [Alibaba Cloud DNS Console](https://dns.console.aliyun.com/).
2. Find `wmlights.com` and click **Configure** (解析).
3. Add or modify the following records:

| Type  | Host Record (主机记录) | Value (记录�? |
|-------|-----------------------|---------------|
| CNAME | @                     | `wuming-led-static-site.pages.dev` |
| CNAME | www                   | `wuming-led-static-site.pages.dev` |

4. Save the records. It may take some time (minutes to hours) for the DNS changes to propagate.

## 4. Verification

Visit [https://wmlights.com](https://wmlights.com) to verify your site is live.

