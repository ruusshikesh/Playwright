const{test,expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');

test('Event Creation', async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByText("Register").click();
    await page.locator("[id='register-email']").fill("rushikesh182@gmail.com");
    await page.getByPlaceholder("Min 8 chars, uppercase, number & symbol").fill("Rushikesh@123");
    await page.getByPlaceholder("Repeat your password").fill("Rushikesh@123");
    await page.getByRole('button',{name:'Create Account'}).click();

    await expect(page.getByRole('link',{name:'Browse Events →'})).toBeVisible();

    await page.getByRole('button',{name:'Explore All Events'}).click();
    await page.getByRole('button',{name:'Add New Event'}).click();
    await page.getByText("You can add up to ").isVisible();
    const eventName = 'BRICS Summit 2026';

    await page.getByPlaceholder('Event title').fill(eventName);
    await page.getByPlaceholder("Describe the event…").fill("Enjoy the event people as Mr Putin is inside the room");
    await page.locator("#category").filter("Sports").click();
    await page.locator("#city").fill("New Delhi Bharat");
    await page.locator("#venue").fill("Bharat Mandapam");
    await page.locator("[id='event-date-&-time']").fill('2027-12-31T10:00');
    await page.locator("[id='price-($)']").fill("99.99");
    await page.locator("[id='total-seats']").fill("300");
    await page.getByRole('button',{name:'+ Add Event'}).click();
    await page.locator("[id='nav-events']").click();

    await page.locator("[id='event-card']").filter({hasText:eventName})
    .locator("[id='book-now-btn']").click();

    await page.getByRole('button',{name:'+'}).dblclick();
    await page.getByPlaceholder("Your full name").fill("Rushikesh Raykar");
    await page.getByPlaceholder("you@email.com").fill("rushikesh@gmail.com");
    await page.locator("[id='phone']").fill("+919119455556");
    await page.getByRole("button",{name:"Confirm Booking"}).click();

    const bookingID = page.locator(".booking-ref").textContent();
    console.log(bookingID);

    await page.getByRole('button',{name:'View My Bookings'}).click();

    //await page.locator("#booking-card']").getByText(bookingID).getByRole('button',{name:'View Details'}).click();

    //Assertions for Count if it is reduced or not

    await page.locator("[id='nav-events']").click();

    await page.pause();

    // Located by CSS class
  const bookingRefEl = page.locator('.booking-ref').first();
  await expect(bookingRefEl).toBeVisible();

  const bookingRef = (await bookingRefEl.innerText()).trim();
  expect(bookingRef.charAt(0)).toBe(eventTitle.trim().charAt(0).toUpperCase());

  console.log(`Booking confirmed. Ref: ${bookingRef}`);

  // ── Step 6: Verify booking appears in My Bookings ────────────────────────
  await page.getByRole('link', { name: 'View My Bookings' }).click();
  await expect(page).toHaveURL(`${BASE_URL}/bookings`);

  // Located by id
  const bookingCards = page.locator('#booking-card');
  await expect(bookingCards.first()).toBeVisible();

  // Find the card that contains our booking ref (via CSS class inside the card)
  const matchingCard = bookingCards.filter({ has: page.locator('.booking-ref', { hasText: bookingRef }) });
  await expect(matchingCard).toBeVisible();

  // Verify event title also appears in the same card
  await expect(matchingCard).toContainText(eventTitle);

  console.log(`Booking card found in My Bookings for ref: ${bookingRef}`);

  // ── Step 7: Verify seat count reduced on Events page ─────────────────────
  await page.goto(`${BASE_URL}/events`);
  await expect(eventCards.first()).toBeVisible();

  // Find the same event by title
  const updatedCard       = eventCards.filter({ hasText: eventTitle }).first();
  await expect(updatedCard).toBeVisible();

  const seatsAfterBooking = parseInt(await updatedCard.getByText('seat').first().innerText());
  console.log(`Seats after booking: ${seatsAfterBooking}`);

  // Booked 1 ticket — count must drop by exactly 1
  expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);

})