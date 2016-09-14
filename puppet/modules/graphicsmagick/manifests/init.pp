class graphicsmagick {
  package {
    'graphicsmagick':
      ensure => present,
      require => Exec['apt-update'];
  }
}