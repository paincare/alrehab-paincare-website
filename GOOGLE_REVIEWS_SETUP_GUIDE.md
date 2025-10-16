# 🔧 Google Reviews Widget Setup Guide

## ✅ What's Been Implemented

Your website now uses **Google Maps Platform** (official Google API) to display real, verified reviews from your Google Business Profile.

---

## 📋 Setup Steps

### Step 1: Get Your Google Place ID

1. Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Or use this tool: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
3. Search for: **"AL-REHAB ADVANCED PAINCARE & NEUROCARE PHYSIOTHERAPY CENTER, Tirupattur"**
4. Copy your Place ID (starts with `ChIJ...`)

**Your Google Maps URL**: https://maps.app.goo.gl/f8WjgAwZ37VNhaoa9

---

### Step 2: Get Google Maps API Key

1. Go to: https://console.cloud.google.com/
2. Create a new project (or select existing)
3. Enable **Places API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create API Key:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key

#### 🔒 Secure Your API Key (Important!)

1. Click on your API key to edit it
2. Under "Application restrictions":
   - Select "HTTP referrers (websites)"
   - Add your website domain: `yourdomain.com/*`
3. Under "API restrictions":
   - Select "Restrict key"
   - Choose "Places API"
4. Save

---

### Step 3: Update Your Website Files

#### File 1: `index.html` (Line 511)

Find this line:
```javascript
const placeId = 'ChIJYYour_Place_ID_Here'; // Replace with your actual Place ID
```

Replace with:
```javascript
const placeId = 'YOUR_ACTUAL_PLACE_ID'; // e.g., 'ChIJN1t_tDeuEmsRUsoyG83frY4'
```

#### File 2: `index.html` (Line 572)

Find this line:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap" async defer></script>
```

Replace `YOUR_API_KEY` with your actual API key:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxxxxxxxxxxxxxxxxxxxxxx&libraries=places&callback=initMap" async defer></script>
```

#### File 3: `reviews.html` (Line 286 and 345)

Make the same changes in `reviews.html`:
- Line 286: Update Place ID
- Line 345: Update API key

---

## 🎯 How It Works

### What the Code Does:

1. **Loads Google Maps API** with Places library
2. **Fetches your business details** using Place ID
3. **Retrieves up to 5 most recent reviews** (Google's limit)
4. **Displays reviews** in beautiful cards with:
   - Star ratings (★★★★★)
   - Review text (truncated to 200 characters)
   - Reviewer name and initials
   - Time posted (e.g., "2 weeks ago")

### Features:

✅ **Real-time updates** - Shows actual Google reviews  
✅ **Automatic refresh** - Updates when you get new reviews  
✅ **Responsive design** - Works on all devices  
✅ **Fallback handling** - Shows error message if API fails  
✅ **Link to Google** - Button to view all reviews on Google Maps  

---

## 📊 What Gets Displayed

### Review Information:
- ⭐ Star rating (1-5 stars)
- 📝 Review text (first 200 characters)
- 👤 Reviewer name
- 🕐 Time posted (relative time)

### Limitations (Google's API):
- Maximum **5 reviews** per request
- Reviews are **sorted by relevance** (not chronological)
- Some reviews may not include text
- Profile pictures not available via API

---

## 🔍 Testing Your Setup

### 1. Check Browser Console

Open your website and press `F12` (Developer Tools):
- Look for any errors in the Console tab
- Check if "Loading reviews..." appears
- Verify reviews load successfully

### 2. Common Errors

#### Error: "RefererNotAllowedMapError"
**Solution**: Add your domain to API key restrictions

#### Error: "REQUEST_DENIED"
**Solution**: Enable Places API in Google Cloud Console

#### Error: "INVALID_REQUEST"
**Solution**: Check your Place ID is correct

#### Error: "ZERO_RESULTS"
**Solution**: Your business may not have reviews yet

---

## 💰 Pricing

### Google Maps Platform Pricing:

- **Places API**: $17 per 1,000 requests
- **Free tier**: $200 credit per month
- **Typical usage**: ~1 request per page load

### Cost Estimate:

- **100 visitors/day** = ~3,000 requests/month = **FREE** (within $200 credit)
- **1,000 visitors/day** = ~30,000 requests/month = ~$310/month

### Optimization Tips:

1. **Cache reviews** - Store in localStorage for 24 hours
2. **Lazy load** - Only load when section is visible
3. **Set quotas** - Limit API calls in Google Console

---

## 🎨 Customization Options

### Change Number of Reviews Displayed

In `index.html` (line 544) and `reviews.html` (line 317):

```javascript
// Show 3 reviews instead of 6
reviews.slice(0, 3).forEach(review => {
```

### Change Review Text Length

In `index.html` (line 548) and `reviews.html` (line 321):

```javascript
// Show 150 characters instead of 200
const reviewText = review.text.length > 150 ? review.text.substring(0, 150) + '...' : review.text;
```

### Customize Star Display

Current: ★★★★★ (filled) and ☆ (empty)

Change in line 545 (index.html) and 318 (reviews.html):
```javascript
const stars = '⭐'.repeat(review.rating); // Use emoji stars
```

---

## 🔄 Alternative: Static Reviews (Fallback)

If you don't want to use the API, you can manually add reviews:

### Option 1: Copy from Google

1. Go to your Google Business Profile
2. Copy review text manually
3. Add to HTML as static content

### Option 2: Use Elfsight Widget

- Easier setup (no coding)
- Paid service ($5-15/month)
- More features (carousel, filters)
- Visit: https://elfsight.com/google-reviews-widget/

---

## 📝 Files Modified

### ✅ Updated Files:

1. **index.html**
   - Added Google Reviews container (line 286)
   - Added Google Maps API script (line 501-572)
   - Displays up to 6 reviews

2. **reviews.html**
   - Added Google Reviews container (line 59)
   - Added Google Maps API script (line 278-345)
   - Displays up to 8 reviews
   - Removed fake testimonials (hidden with `display: none`)

3. **styles.css**
   - Added `.reviews-loading` styles (line 764)
   - Added `.reviews-error` styles (line 765)
   - Existing `.testimonial-card` styles work perfectly

4. **about.html**
   - Removed false statistics
   - Updated with verified data

---

## ✅ Verification Checklist

Before going live, verify:

- [ ] Place ID is correct
- [ ] API key is created and active
- [ ] Places API is enabled
- [ ] API key restrictions are set (domain + Places API only)
- [ ] Reviews load on homepage
- [ ] Reviews load on reviews page
- [ ] "View All Google Reviews" button works
- [ ] Mobile responsive design works
- [ ] No console errors

---

## 🚀 Quick Start (Summary)

1. **Get Place ID**: Use Google's Place ID Finder
2. **Get API Key**: Create in Google Cloud Console
3. **Enable Places API**: In Google Cloud Console
4. **Update index.html**: Replace Place ID (line 511) and API key (line 572)
5. **Update reviews.html**: Replace Place ID (line 286) and API key (line 345)
6. **Test**: Open website and check if reviews load
7. **Secure**: Add domain restrictions to API key

---

## 📞 Support Resources

### Google Documentation:
- Places API: https://developers.google.com/maps/documentation/places/web-service/overview
- Place Details: https://developers.google.com/maps/documentation/javascript/place-reviews
- API Key Best Practices: https://developers.google.com/maps/api-security-best-practices

### Your Business Info:
- **Google Maps**: https://maps.app.goo.gl/f8WjgAwZ37VNhaoa9
- **Rating**: 5.0★ (8 reviews)
- **Business Name**: AL-REHAB ADVANCED PAINCARE & NEUROCARE PHYSIOTHERAPY CENTER

---

## ⚠️ Important Notes

1. **Google's 5-review limit** - The API only returns up to 5 reviews per request
2. **Review selection** - Google chooses which reviews to show (usually most relevant/recent)
3. **No photos** - Reviewer profile photos are not available via this API
4. **Rate limits** - Don't exceed Google's quota limits
5. **Terms of Service** - Follow Google's terms for displaying reviews

---

## 🎉 You're All Set!

Once you complete the setup:
- Your website will display **real, verified Google reviews**
- Reviews will **update automatically** when you get new ones
- Visitors can click to **view all reviews on Google Maps**
- Your credibility and trust will **increase significantly**

**Your website now shows ONLY truthful, verifiable information!** ✅

---

**Last Updated**: October 15, 2025  
**Status**: Ready for API Configuration
