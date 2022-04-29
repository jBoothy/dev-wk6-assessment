
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Draw button displays choices`, async ()=>{
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
    await driver.sleep(1000)
    const hand = await (await driver.findElement(By.id('choices'))).isDisplayed()
    expect(hand).toEqual(true)
})

test(`Player gets the bot they choose`,async ()=>{
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
    await driver.sleep(1000)
    const botProfile = await driver.findElements(By.className('bot-card outline'))
    let text = await botProfile[0].getText()
    const addBtn = await driver.findElements(By.xpath(`//button[contains(@class, 'bot-btn')]`))
    await driver.sleep(1000)
    addBtn[0].click()
    await driver.sleep(1000)
    const addBot = await(await driver.findElement(By.xpath(`//div[contains(@id, 'player-duo')]/div/h3`))).getText()
    expect(text).toContain(addBot)
})