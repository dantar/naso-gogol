#!/bin/bash
#set -v # do not expand variables
set -x # output
set -e # stop on error
set -u # stop if you use an uninitialized variable

TODAY=`date +%Y-%m-%d-%H-%M-%S`
echo $TODAY

HACKGIT=~/hack/git
NGDIR=$HACKGIT/naso-gogol/naso-ng

REMOTE="ssh dantar "

cd $NGDIR
ng build --base-href=./ --prod

rsync --delete -varzh $NGDIR/dist/naso-ng/* dantar:/home/daniele/html/naso/

