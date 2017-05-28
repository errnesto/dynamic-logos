NODE_ENV=production npm run build
rsync --archive --verbose --exclude-from '.deployignore' dst/ wundf@wunderundfitzig.de:dynamic-logos
rm -r dst
