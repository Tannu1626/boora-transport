-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  pickup_location TEXT NOT NULL,
  destination TEXT NOT NULL,
  preferred_date DATE,
  preferred_time TEXT,
  details TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unread'
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);

-- Sample data for bookings
INSERT INTO bookings (name, email, phone, service, pickup_location, destination, preferred_date, preferred_time, details, status)
VALUES 
  ('John Smith', 'john@example.com', '+44 7123 456789', 'home-relocation', '123 Old Street, London', '456 New Road, Manchester', '2025-07-15', 'morning', 'Moving a 2-bedroom flat', 'confirmed'),
  ('Sarah Johnson', 'sarah@example.com', '+44 7234 567890', 'furniture-removal', '78 High Street, Birmingham', 'N/A', '2025-07-10', 'afternoon', '3 large sofas and a dining table', 'pending'),
  ('Michael Brown', 'michael@example.com', '+44 7345 678901', 'parcel-delivery', '15 Park Lane, London', '27 Church Road, Edinburgh', '2025-07-08', 'evening', 'Fragile package, handle with care', 'in-transit');

-- Sample data for contact_messages
INSERT INTO contact_messages (name, email, phone, subject, message, status)
VALUES 
  ('Emma Wilson', 'emma@example.com', '+44 7456 789012', 'Request a Quote', 'I need a quote for moving a 3-bedroom house from London to Bristol next month.', 'unread'),
  ('David Taylor', 'david@example.com', '+44 7567 890123', 'Furniture Removal', 'Do you offer disposal services for old furniture?', 'read'),
  ('Lisa Martin', 'lisa@example.com', '+44 7678 901234', 'General Inquiry', 'What areas of the UK do you cover for parcel delivery?', 'replied');
