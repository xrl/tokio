(function() {var implementors = {};
implementors["tokio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/fs/struct.File.html\" title=\"struct std::fs::File\">File</a>&gt; for <a class=\"struct\" href=\"tokio/fs/struct.File.html\" title=\"struct tokio::fs::File\">File</a>","synthetic":false,"types":["tokio::fs::file::File"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/fs/struct.OpenOptions.html\" title=\"struct std::fs::OpenOptions\">OpenOptions</a>&gt; for <a class=\"struct\" href=\"tokio/fs/struct.OpenOptions.html\" title=\"struct tokio::fs::OpenOptions\">OpenOptions</a>","synthetic":false,"types":["tokio::fs::open_options::OpenOptions"]},{"text":"impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio/io/struct.BufReader.html\" title=\"struct tokio::io::BufReader\">BufReader</a>&lt;<a class=\"struct\" href=\"tokio/io/struct.BufWriter.html\" title=\"struct tokio::io::BufWriter\">BufWriter</a>&lt;RW&gt;&gt;&gt; for <a class=\"struct\" href=\"tokio/io/struct.BufStream.html\" title=\"struct tokio::io::BufStream\">BufStream</a>&lt;RW&gt;","synthetic":false,"types":["tokio::io::util::buf_stream::BufStream"]},{"text":"impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio/io/struct.BufWriter.html\" title=\"struct tokio::io::BufWriter\">BufWriter</a>&lt;<a class=\"struct\" href=\"tokio/io/struct.BufReader.html\" title=\"struct tokio::io::BufReader\">BufReader</a>&lt;RW&gt;&gt;&gt; for <a class=\"struct\" href=\"tokio/io/struct.BufStream.html\" title=\"struct tokio::io::BufStream\">BufStream</a>&lt;RW&gt;","synthetic":false,"types":["tokio::io::util::buf_stream::BufStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/process/struct.Command.html\" title=\"struct std::process::Command\">Command</a>&gt; for <a class=\"struct\" href=\"tokio/process/struct.Command.html\" title=\"struct tokio::process::Command\">Command</a>","synthetic":false,"types":["tokio::process::Command"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio/task/struct.JoinError.html\" title=\"struct tokio::task::JoinError\">JoinError</a>&gt; for <a class=\"struct\" href=\"tokio/io/struct.Error.html\" title=\"struct tokio::io::Error\">Error</a>","synthetic":false,"types":["std::io::error::Error"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, TrySendError<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"tokio/sync/mpsc/error/struct.SendError.html\" title=\"struct tokio::sync::mpsc::error::SendError\">SendError</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::mpsc::error::SendError"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, TrySendError<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TrySendError.html\" title=\"enum tokio::sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::mpsc::error::TrySendError"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio/sync/mpsc/error/struct.SendError.html\" title=\"struct tokio::sync::mpsc::error::SendError\">SendError</a>&lt;T&gt;&gt; for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TrySendError.html\" title=\"enum tokio::sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::mpsc::error::TrySendError"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio/sync/struct.Mutex.html\" title=\"struct tokio::sync::Mutex\">Mutex</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::mutex::Mutex"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio/sync/struct.RwLock.html\" title=\"struct tokio::sync::RwLock\">RwLock</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::rwlock::RwLock"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>&gt; for <a class=\"struct\" href=\"tokio/time/struct.Instant.html\" title=\"struct tokio::time::Instant\">Instant</a>","synthetic":false,"types":["tokio::time::instant::Instant"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio/time/struct.Instant.html\" title=\"struct tokio::time::Instant\">Instant</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>","synthetic":false,"types":["std::time::Instant"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio/time/struct.Elapsed.html\" title=\"struct tokio::time::Elapsed\">Elapsed</a>&gt; for <a class=\"struct\" href=\"tokio/io/struct.Error.html\" title=\"struct tokio::io::Error\">Error</a>","synthetic":false,"types":["std::io::error::Error"]}];
implementors["tokio_tls"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/native-tls/0.2/native_tls/struct.TlsConnector.html\" title=\"struct native_tls::TlsConnector\">TlsConnector</a>&gt; for <a class=\"struct\" href=\"tokio_tls/struct.TlsConnector.html\" title=\"struct tokio_tls::TlsConnector\">TlsConnector</a>","synthetic":false,"types":["tokio_tls::TlsConnector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/native-tls/0.2/native_tls/struct.TlsAcceptor.html\" title=\"struct native_tls::TlsAcceptor\">TlsAcceptor</a>&gt; for <a class=\"struct\" href=\"tokio_tls/struct.TlsAcceptor.html\" title=\"struct tokio_tls::TlsAcceptor\">TlsAcceptor</a>","synthetic":false,"types":["tokio_tls::TlsAcceptor"]}];
implementors["tokio_util"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"tokio_util/codec/enum.LinesCodecError.html\" title=\"enum tokio_util::codec::LinesCodecError\">LinesCodecError</a>","synthetic":false,"types":["tokio_util::codec::lines_codec::LinesCodecError"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()