# ELMSLN - Sustainability Guide

This is the way that project founder btopro keeps life manageable with how complex a product this is. The best way to use this and care for your ELMSLN instance is the following:

Use the elmsln-developer repository

git clone --recursive https://github.com/elmsln/elmsln-developer.git elmsln

Then review https://github.com/elmsln/elmsln-developer/blob/master/README.md

To stand up and best maintain your own instance..

Create a new 'origin' that's internal to your organization. This will mirror the github repo but will be a better choice for syncing up with so it's not directly tied to the github source.

Now go to the elmsln/instances directory of your larger repo and create a new repo that's hosted on an internal git server / private bitbucket.

put files in there that mirror the default state of elmsln-config-example that comes with the developer package. Now when you deploy this you'll want to swap out the "rm -rf config
git clone https://github.com/elmsln/elmsln-config-example.git config"

you'll want to deviate by referencing your in-house config repo

NOW you can maintain the entire ELMSLN instance as 2 git repos. One for the project as a whole (/var/www/elmsln) and one as everything that's specific to this configuration (/var/www/elmsln/config).

# === THEORY ===
Theorethetically (obviously more complex then this) you could go to any ELMSLN instance and swap out the repo for the config directory and drop another one in and (assuming db credentials work against a different server / things aren't localhost) then it'll "just work".

This design pattern is also "targetable" so we can write automation scripts to get people's instances automatically upgraded with relative ease thanks to fractal design patterns and chain automation.

Chaining this together with knowledge of every instance being done this way, and the design pattern of where sites are located when organically requested you can have individuals with singular commands maintaining the "drupal" portion of the repo with 1 or 2 commands yet managing 100s or thousands of sites.

By forming a way of maintaining an intentionally fragmented environment, everyone is able to branch off and innovate (at some level) while still ensuring that the "product" is

# === DRUPAL ===
Unless you really understand Galaxy packaging format and what's at play with this application, then we don't recommend trying to maintain Drupal core directly. Part of this system's advantage is that the community is maintaining / testing the entire network of systems working together. If you want to add modules to the setup, this should happen in /var/www/elmsln/config/shared/{drupal core}/modules .  Placing modules here will bring them into scope of all sites you run (across domains).

# === NETWORK SCALE ===
A product that is effectively a multiple-multisite and be terrifying to say. That's a lot of domains, ips, certs, code and users hitting 1 location (OMG shared hosting). But, applying the principles of fractal design and chain automation, there's nothing saying that your code isn't mirrored across multiple nodes (servers) on a network.

Transactions between systems are intentionally made via web services in the event that you'd branch out and (for example) maintain CIS / online on a dedicated server, and each of the other tools in the network on their own hardware. This can still be replicated (in travis-ci / vagrant) as a single package, developed as a single package, and through a simple spidering git push / pull can be rolled out to all systems in the network.

The only piece that needs documented as to how to do this part is that the current /var/www/elmsln/config/jobs folder would effectively need to be rsynced to the other servers in the network so that they knew to build something (since that's currently just on 1 file system).

There's an issue for this piece on github if interested: https://github.com/elmsln/elmsln/issues/17
