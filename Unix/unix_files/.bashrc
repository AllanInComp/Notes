export HISTSIZE=10000 #500 is default 
  export HISTFILESIZE=1000000 #if exceed, will truncate oldest records in file 
  export HISTTIMEFORMAT='%b %d %I:%M %p'
  export HISTCONTROL=ignoreboth #ignoredups:ignorespace
  export HISTIGNORE="history:pwd:exit:df:ls:ls -la:ll" #omit commands in the quotes in history 

