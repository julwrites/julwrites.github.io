import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1920, "height": 1080})
        await page.goto('http://localhost:4321/')
        await page.screenshot(path='home_desktop.png', full_page=True)
        await page.goto('http://localhost:4321/projects/')
        await page.screenshot(path='projects_desktop.png', full_page=True)
        await page.goto('http://localhost:4321/blog/')
        await page.screenshot(path='blog_desktop.png', full_page=True)
        await page.goto('http://localhost:4321/labs/')
        await page.screenshot(path='labs_desktop.png', full_page=True)
        await browser.close()

asyncio.run(main())
