class imagemagick {
  package {
    'imagemagick':
      ensure => present,
      require => Exec['apt-update'];
  }
  exec {
    'apt-update':
      #command => 'aptitude -y update && aptitude -y upgrade && touch /root/.apt-update',
      command => 'aptitude -y update && touch /root/.apt-update',
      creates => '/root/.apt-update',
      timeout => 900,
  }
}
