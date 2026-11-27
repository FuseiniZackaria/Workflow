const clean = (v, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const phoneOk = (p) => /^[+\d][\d\s()-]{6,20}$/.test(p);
const emailOk = (e) => !e || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export function validateBooking(body = {}) {
  const data = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 30),
    email: clean(body.email, 120),
    vehicle: clean(body.vehicle, 120),
    service: clean(body.service, 100),
    date: clean(body.date, 20),
    message: clean(body.message, 1000),
  };
  const errors = [];
  if (!data.name) errors.push('Please enter your name.');
  if (!phoneOk(data.phone)) errors.push('Please enter a valid phone number.');
  if (!emailOk(data.email)) errors.push('Please enter a valid email address.');
  if (!data.vehicle) errors.push('Please tell us your vehicle make and model.');
  if (!data.service) errors.push('Please choose a service.');
  return { errors, data };
}

export function validateContact(body = {}) {
  const data = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 30),
    email: clean(body.email, 120),
    message: clean(body.message, 1500),
  };
  const errors = [];
  if (!data.name) errors.push('Please enter your name.');
  if (!phoneOk(data.phone)) errors.push('Please enter a valid phone number.');
  if (!emailOk(data.email)) errors.push('Please enter a valid email address.');
  if (!data.message) errors.push('Please write a message.');
  return { errors, data };
}
