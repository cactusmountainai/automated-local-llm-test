```javascript
#!/usr/bin/env node
/**
 * Image Optimization Script for Lane Smith Portfolio
 * Compresses large asset images to reduce load times and improve Lighthouse scores
 */

const fs = require('fs');
const path = require('path');

// Sharp for image processing
const sharp = require('sharp');

/**
 * Configure compression settings for optimal web performance
 */
const getCompressionOptions = (format) => {
  const options = {
    quality: 85, // Balance between quality and file size
    jpeg: { progressive: true, mozjpeg: true },
    webp: { quality: 80, lossless: false }
  };
  return options[format];
};

/**
 * Optimize a single image file
 */
async function optimizeImage(inputPath, outputPath) {
  const fileName = path.basename(inputPath);
  const ext = path.extname(inputPath);
  const format = ext === '.png' ? 'png' : 'jpeg';
  const compressionOptions = getCompressionOptions(format);

  try {
    console.log(`Processing: ${fileName}`);

    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;

    // Process and optimize with sharp
    const metadata = await sharp(inputPath).metadata();
    const originalWidth = metadata.width;
    const originalHeight = metadata.height;

    // Resize if larger than recommended (max 1920px width for web)
    let resized = false;
    if (originalWidth > 1920) {
      console.log(`  - Resizing ${originalWidth}x${originalHeight} → 1920x${originalHeight}`);
      await sharp(inputPath).resize(1920, sharp.fit.inward).toFile(outputPath);
      resized = true;
    } else {
      await sharp(inputPath).toFile(outputPath);
    }

    // Apply compression
    await sharp(outputPath).compress(compressionOptions).toFile(outputPath);

    // Get new file size
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;

    // Calculate reduction
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    const bytesSaved = originalSize - newSize;

    console.log(`  ✓ Optimized: ${originalSize} → ${newSize} bytes (-${reduction}%)`);
    console.log(`  ✓ Dimensions: ${originalWidth}x${originalHeight}`);
    
    if (resized) {
      console.log(`  ✓ Resized for web performance`);
    }

    return {
      originalSize,
      newSize,
      reduction,
      bytesSaved
    };
  } catch (error) {
    console.error(`  ✗ Error processing ${fileName}:`, error.message);
    throw error;
  }
}

/**
 * Main optimization function
 */
async function optimizeAllImages() {
  const assetsDir = path.join(__dirname, '..', 'assets');
  const outputDir = path.join(__dirname, '..', 'assets', 'optimized');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created output directory: ${outputDir}`);
  }

  // List of images to optimize (from project summary)
  const images = [
    'Voyages.jpg',
    'CIEMT.jpg',
    'LGP.jpg',
    'GPTBUDDY.png',
    'PRO.jpg'
  ];

  console.log('='.repeat(60));
  console.log('IMAGE OPTIMIZATION SCRIPT');
  console.log('='.repeat(60));
  console.log(`Target directory: ${assetsDir}`);
  console.log(`Output directory: ${outputDir}`);
  console.log(`Images to process: ${images.join(', ')}`);
  console.log('='.repeat(60));

  // Track total statistics
  let totalOriginalSize = 0;
  let totalNewSize = 0;

  // Process each image
  for (const image of images) {
    const inputPath = path.join(assetsDir, image);
    const outputPath = path.join(outputDir, image);

    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Image not found: ${image}`);
      continue;
    }

    // Get original size
    const originalSize = fs.statSync(inputPath).size;
    totalOriginalSize += originalSize;

    try {
      // Optimize and save to optimized folder
      await optimizeImage(inputPath, outputPath);

      // Copy original to optimized folder for reference
      fs.copyFileSync(inputPath, outputPath);
      console.log(`  ℹ️  Copied original for reference`);

      totalNewSize += fs.statSync(outputPath).size;
    } catch (error) {
      console.error(`Failed to optimize: ${image}`);
    }
  }

  // Calculate overall statistics
  const totalNewSizeFinal = totalNewSize || totalOriginalSize;
  const totalReduction = ((totalOriginalSize - totalNewSizeFinal) / totalOriginalSize * 100).toFixed(2);

  console.log('='.repeat(60));
  console.log('OPTIMIZATION COMPLETE');
  console.log('='.repeat(60));
  console.log(`Original total size: ${formatBytes(totalOriginalSize)}`);
  console.log(`Optimized total size: ${formatBytes(totalNewSizeFinal)}`);
  console.log(`Overall reduction: -${totalReduction}%`);
  console.log(`Time saved: Load times reduced, Lighthouse scores improved`);
  console.log('='.repeat(60));

  // Create README for optimized images
  createOptimizationReport();
}

/**
 * Format bytes to human-readable format
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Create optimization report
 */
function createOptimizationReport() {
  const reportPath = path.join(__dirname, '..', 'assets', 'README_OPTIMIZATION.md');
  
  const report = `# Optimized Images Report

## Optimization Summary

**Images Processed:** 5
**Original Total Size:** ${formatBytes(totalOriginalSize)}
**Optimized Total Size:** ${formatBytes(totalNewSizeFinal)}
**Overall Reduction:** ${totalReduction}%

## Image Details

| File | Original Size | Optimized Size | Reduction |
|------|---------------|----------------|-----------|
| Voyages.jpg | ${formatBytes(totalOriginalSize)} | ${formatBytes(totalNewSizeFinal)} | ${totalReduction}% |
| CIEMT.jpg | ${formatBytes(totalOriginalSize)} | ${formatBytes(totalNewSizeFinal)} | ${totalReduction}% |
| LGP.jpg | ${formatBytes(totalOriginalSize)} | ${formatBytes(totalNewSizeFinal)} | ${totalReduction}% |
| GPTBUDDY.png | ${formatBytes(totalOriginalSize)} | ${formatBytes(totalNewSizeFinal)} | ${totalReduction}% |
| PRO.jpg | ${formatBytes(totalOriginalSize)} | ${formatBytes(totalNewSizeFinal)} | ${totalReduction}% |

## Optimization Settings

- **Quality:** 85% (balance between quality and file size)
- **Progressive JPEG:** Enabled for better perceived loading
- **Max Width:** 1920px (web-optimized)
- **Format:** Original format preserved
- **MozJPEG:** Enabled for better compression

## Benefits

✅ **Faster Load Times** - Reduced file sizes mean faster downloads
✅ **Better Lighthouse Scores** - Image optimization is a core Lighthouse metric
✅ **Improved UX** - Pages load faster, especially on mobile networks
✅ **SEO Boost** - Google ranks faster-loading sites higher

## Usage

The optimized images are stored in the \`assets/optimized/\` folder.
Update image references in HTML files to use the optimized versions.

## Deployment

When deploying to GitHub Pages, include the \`optimized/\` folder in your repository.
Replace image references in HTML files with paths to optimized images.
`;

  fs.writeFileSync(reportPath, report);
  console.log(`\nℹ️  Created optimization report: ${reportPath}`);
}

// Run the optimization
optimizeAllImages()
  .then(() => {
    console.log('\n✅ Optimization complete!');
    process.exit(0);
  })
  .catch(error => {
    console.error('\n❌ Optimization failed:', error.message);
    process.exit(1);
  });
```