const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'templatemo_569_edu_meeting', 'templatemo_569_edu_meeting');
const viewsDir = path.join(__dirname, 'src', 'views');

if (!fs.existsSync(viewsDir)) {
    fs.mkdirSync(viewsDir, { recursive: true });
}

function convertHtmlToVue(htmlFilename, vueFilename) {
    const htmlPath = path.join(srcDir, htmlFilename);
    const vuePath = path.join(viewsDir, vueFilename);
    
    if (fs.existsSync(htmlPath)) {
        let content = fs.readFileSync(htmlPath, 'utf-8');
        const bodyRegex = /<body>([\s\S]*?)<\/body>/;
        const match = content.match(bodyRegex);
        if (match) {
            let bodyContent = match[1];
            // Remove script tags from the body so they don't cause Vue errors
            bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
            // Wrap in template
            const vueTemplate = `<template>\n${bodyContent}\n</template>\n\n<script setup>\n// Converted from ${htmlFilename}\n</script>\n`;
            fs.writeFileSync(vuePath, vueTemplate);
            console.log(`Converted ${htmlFilename} to ${vueFilename}`);
        }
    }
}

// Convert
convertHtmlToVue('meetings.html', 'Meetings.vue');
convertHtmlToVue('meeting-details.html', 'MeetingDetails.vue');

// Let's also create Home.vue from App.vue so App.vue can just have <router-view>
const appVuePath = path.join(__dirname, 'src', 'App.vue');
const homeVuePath = path.join(viewsDir, 'Home.vue');
if (fs.existsSync(appVuePath)) {
    fs.copyFileSync(appVuePath, homeVuePath);
    console.log("Copied App.vue to Home.vue");
}
